import { readFile } from "fs/promises";
import { join } from "path";
import "dotenv/config";

interface DrugCsvRow {
  name: string;
  activeIngredient: string;
  manufacturer: string;
  description: string;
  formFactor: string;
  country: string;
  currency: string;
  price: string;
  image: string;
}

function parseCsv(content: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let insideQuotes = false;

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index];
    const nextChar = content[index + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      field += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === "," && !insideQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }
      row.push(field);
      if (row.some((value) => value.trim() !== "")) {
        rows.push(row);
      }
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  row.push(field);
  if (row.some((value) => value.trim() !== "")) {
    rows.push(row);
  }

  return rows;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

function normalizeFormFactor(value: string) {
  const lower = value.toLowerCase();

  if (lower.includes("tablet")) return "tablet";
  if (lower.includes("capsule")) return "capsule";
  if (lower.includes("pen")) return "pre-filled-pen";
  if (lower.includes("injection")) return "injection";

  return value.trim() || "other";
}

function parsePrice(value: string) {
  const normalized = value.replace(/[^\d.]/g, "");
  const amount = Number(normalized);

  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error(`Invalid price: ${value}`);
  }

  return amount;
}

function getTier(activeIngredient: string) {
  const lower = activeIngredient.toLowerCase();

  if (lower.includes("tirzepatide")) return "premium";
  if (lower.includes("semaglutide")) return "affordable";

  return "standard";
}

function toDrugType(activeIngredient: string) {
  const lower = activeIngredient.toLowerCase();

  if (lower.includes("semaglutide")) return "semaglutide";
  if (lower.includes("tirzepatide")) return "tirzepatide";
  if (lower.includes("liraglutide")) return "liraglutide";

  return slugify(activeIngredient) || "other";
}

function toRecords(rows: string[][]): DrugCsvRow[] {
  const [headers, ...dataRows] = rows;
  const normalizedHeaders = headers.map((header) => header.trim());

  return dataRows.map((dataRow) => {
    const record = normalizedHeaders.reduce<Record<string, string>>((result, header, index) => {
      result[header] = dataRow[index]?.trim() || "";
      return result;
    }, {});

    return {
      name: record.name,
      activeIngredient: record.activeIngredient,
      manufacturer: record.manufacturer,
      description: record.description,
      formFactor: record.formFactor,
      country: record.country || "IN",
      currency: record.currency || "INR",
      price: record.price,
      image: record.image,
    };
  });
}

async function createPrisma() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is required to import drugs.");
  }

  const [{ PrismaClient }, { PrismaPg }, pgModule] = await Promise.all([
    import("@prisma/client"),
    import("@prisma/adapter-pg"),
    import("pg"),
  ]);
  const pool = new pgModule.default.Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  return { prisma, pool };
}

async function main() {
  const filePath = join(process.cwd(), "Indian Weight Loss Drugs.csv");
  const file = await readFile(filePath, "utf8");
  const records = toRecords(parseCsv(file));
  const validRecords = records.filter((record) => record.name && record.activeIngredient && record.price);
  const skipped = records.length - validRecords.length;
  const dryRun = process.argv.includes("--dry-run");

  for (const record of validRecords) {
    parsePrice(record.price);
  }

  if (dryRun) {
    console.log(`Validated ${validRecords.length} drug rows from ${filePath}.`);
    if (skipped > 0) {
      console.log(`Skipped ${skipped} incomplete rows.`);
    }
    console.log("No database writes performed.");
    return;
  }

  const { prisma, pool } = await createPrisma();

  let imported = 0;

  try {
    for (const record of records) {
      if (!record.name || !record.activeIngredient || !record.price) {
        console.warn(`Skipping incomplete drug row: ${record.name || "(missing name)"}`);
        continue;
      }

      const productId = `drug-${slugify(record.name)}`;
      const planId = `plan-${slugify(record.name)}`;
      const country = record.country.toUpperCase();
      const currency = record.currency.toUpperCase();

      await prisma.product.upsert({
        where: { id: productId },
        update: {
          name: record.name,
          activeIngredient: record.activeIngredient,
          manufacturer: record.manufacturer,
          description: record.description,
          formFactor: normalizeFormFactor(record.formFactor),
          image: record.image || null,
          isActive: true,
        },
        create: {
          id: productId,
          name: record.name,
          activeIngredient: record.activeIngredient,
          manufacturer: record.manufacturer,
          description: record.description,
          formFactor: normalizeFormFactor(record.formFactor),
          image: record.image || null,
          isActive: true,
        },
      });

      await prisma.plan.upsert({
        where: { id: planId },
        update: {
          productId,
          drugType: toDrugType(record.activeIngredient),
          tier: getTier(record.activeIngredient),
          durationMonths: 1,
          isActive: true,
        },
        create: {
          id: planId,
          productId,
          drugType: toDrugType(record.activeIngredient),
          tier: getTier(record.activeIngredient),
          durationMonths: 1,
          isActive: true,
        },
      });

      await prisma.planPrice.upsert({
        where: {
          planId_country: {
            planId,
            country,
          },
        },
        update: {
          currency,
          amount: parsePrice(record.price),
        },
        create: {
          planId,
          country,
          currency,
          amount: parsePrice(record.price),
        },
      });

      imported += 1;
    }

    console.log(`Imported ${imported} drug products from ${filePath}.`);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
