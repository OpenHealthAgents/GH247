export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category:
    | "Healthcare AI"
    | "Drug Discovery"
    | "Fitness"
    | "Medication Intelligence"
    | "Engineering"
    | "Company News";
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  toc: Array<{ id: string; text: string; depth: number }>;
  content: string; // Markdown / MDX style string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "transforming-fhir-emr-workflows",
    title: "Transforming EMR Workflows Natively with HL7 FHIR & AI Agents",
    excerpt:
      "Discover how autonomous clinical agents query structured medical databases to reduce charting fatigue by 60% and improve pre-screening accuracy.",
    date: "July 18, 2026",
    category: "Healthcare AI",
    readTime: "6 min read",
    author: {
      name: "Dr. Kalyan Kalwa",
      role: "Co-Founder & CEO",
      avatar: "KK",
    },
    toc: [
      { id: "introduction", text: "Introduction", depth: 2 },
      { id: "fhir-role", text: "The Role of HL7 FHIR", depth: 2 },
      { id: "agentic-triage", text: "Autonomous Agentic Triage", depth: 2 },
      { id: "conclusion", text: "Conclusion & Outlook", depth: 2 },
    ],
    content: `## Introduction

The administrative burden on modern clinicians is at an all-time high. Studies indicate that physicians spend up to two hours on electronic medical record (EMR) charting for every single hour of direct patient care.

To address this charting fatigue, we engineered **DrGodly**, an AI-native EMR platform designed around HL7 FHIR schemas.

## The Role of HL7 FHIR

Unlike legacy clinical databases that use proprietary, siloed structures, DrGodly implements the HL7 FHIR (Fast Healthcare Interoperability Resources) R4 standard natively. This ensures that:

* All patient data is structured in uniform, JSON-based resource files.
* Direct integration endpoints are compatible out-of-the-box with Epic, Cerner, and regional hospital portals.
* Strict schema validation prevents erroneous data formats from entering databases.

Here is an example FHIR payload structure representing a patient resource:

\`\`\`json
{
  "resourceType": "Patient",
  "id": "pat-102",
  "active": true,
  "name": [
    {
      "use": "official",
      "family": "Smith",
      "given": ["John", "Edward"]
    }
  ]
}
\`\`\`

## Autonomous Agentic Triage

By structuring EMR datasets in FHIR, we enable multi-agent systems to query medical history. When a patient syncs wearable telemetry or answers intake surveys:

1. **Intake Agent**: Generates symptom summaries.
2. **Safety Agent**: Audits RxNorm registries to flag allergen interactions.
3. **Coding Agent**: Suggests accurate ICD-10 codes.

This pipeline reduces physician charting overhead from 15 minutes down to under 4 minutes per patient intake.

## Conclusion & Outlook

AI-native EMR architectures are no longer a future concept. By merging structured FHIR data with agentic models, we are reclaiming time for doctors and building a safer healthcare infrastructure.`,
  },
  {
    slug: "accelerating-drug-discovery-docking",
    title: "Accelerating Ligand-Target Docking with Drug Discovery OS",
    excerpt:
      "An overview of how biochemical foundation transformers and knowledge graph maps reduce compound validation latency from years to days.",
    date: "July 12, 2026",
    category: "Drug Discovery",
    readTime: "8 min read",
    author: {
      name: "Dr. Kalyan Kalwa",
      role: "Co-Founder & CEO",
      avatar: "KK",
    },
    toc: [
      {
        id: "challenges",
        text: "Challenges in Traditional Screening",
        depth: 2,
      },
      { id: "bio-transformers", text: "Bio-Foundation Transformers", depth: 2 },
      { id: "results", text: "Quantifiable Discovery Results", depth: 2 },
    ],
    content: `## Challenges in Traditional Screening

Historically, identifying a target compound and validating its binding affinity required years of high-throughput laboratory screening. Finding a single lead molecule often felt like searching for a needle in a molecular haystack.

## Bio-Foundation Transformers

Our **Drug Discovery OS** approaches this problem computationally by utilizing deep transformer architectures trained on amino acid sequences and molecular SMILES strings.

These models construct high-dimensional embeddings that project:

* **Binding Pockets**: Predicting protein pocket shapes and docking paths.
* **Affinity Scores**: Simulating ligand-protein docking profiles in silica.
* **ADMET Properties**: Forecasting toxicity and absorption factors.

For instance, optimizing a synthesis pipeline route can be modeled in Python:

\`\`\`python
# Simulating ligand binding pocket coordinates
def calculate_docking_score(ligand_coords, protein_coords):
    distance = sum((a - b) ** 2 for a, b in zip(ligand_coords, protein_coords))
    affinity = 1.0 / (1.0 + distance)
    return f"Binding Affinity Score: {affinity:.4f}"

print(calculate_docking_score([1.2, 0.8, -0.4], [1.1, 0.9, -0.3]))
\`\`\`

## Quantifiable Discovery Results

By running multi-agent docking simulations on virtual cohorts, we validated binding parameters for complex targets in under 72 hours, bypassing months of initial assay setups.`,
  },
  {
    slug: "google-okf-schemas-medical-llms",
    title: "Aligning Medical LLMs with Google OKF Knowledge Graphs",
    excerpt:
      "How we eliminate model hallucinations by grounding retrieval paths using Open Knowledge Graph schemas and structured semantic rules.",
    date: "July 05, 2026",
    category: "Engineering",
    readTime: "7 min read",
    author: {
      name: "Dr. Kalyan Kalwa",
      role: "Co-Founder & CEO",
      avatar: "KK",
    },
    toc: [
      {
        id: "hallucination-problem",
        text: "The Medical Hallucination Problem",
        depth: 2,
      },
      { id: "google-okf", text: "Grounding with Google OKF", depth: 2 },
      { id: "system-design", text: "System Architecture", depth: 2 },
    ],
    content: `## The Medical Hallucination Problem

When deploying LLMs in clinical contexts, accuracy is not optional. Standard language models generate plausible-sounding text, but they can occasionally misstate drug quantities or pathway side effects—an unacceptable outcome for patient-facing software.

## Grounding with Google OKF

To enforce factual alignment, our models do not rely solely on internal weights. Instead, they reference structured semantic guidelines mapped from the **Google Open Knowledge Foundation (OKF)** schemas.

This workflow guarantees:

* **Entity Resolution**: Resolving synonyms (e.g. mapping "Aspirin" and "Acetylsalicylic acid" to a single RxNorm ID).
* **Relationship Validation**: Verifying compound-disease connections using graph verification algorithms.
* **Traceable Citations**: Restricting generator outputs to verified scientific literature blocks.

## System Architecture

Our engine utilizes a two-step RAG verification loop:

1. **Retrieval**: Extract vector indices alongside knowledge graph pathways.
2. **Validation**: Check generated responses against active OKF relationship rules before rendering.`,
  },
];
