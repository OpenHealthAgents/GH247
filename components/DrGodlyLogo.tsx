import Link from "next/link";

export function DrGodlyLogo({ href = "/" }: { href?: string }) {
  const content = (
    <span className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F2F2A] text-sm font-black text-[#F7FFF9] shadow-sm">
        DG
      </span>
      <span className="text-xl font-black tracking-tight text-zinc-950 dark:text-zinc-50">
        Dr.Godly
      </span>
    </span>
  );

  if (!href) {
    return <div aria-label="Dr.Godly">{content}</div>;
  }

  return (
    <Link href={href} aria-label="Dr.Godly home" className="shrink-0">
      {content}
    </Link>
  );
}
