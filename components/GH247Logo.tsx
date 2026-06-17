import Link from "next/link";

export function GH247Logo({ href = "/" }: { href?: string }) {
  const content = (
    <span className="flex items-center gap-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F2F2A] text-sm font-black text-[#F7FFF9] shadow-sm">
        GH
      </span>
      <span className="text-xl font-black tracking-tight text-zinc-950 dark:text-zinc-50">
        GH247
      </span>
    </span>
  );

  if (!href) {
    return <div aria-label="GH247">{content}</div>;
  }

  return (
    <Link href={href} aria-label="GH247 home" className="shrink-0">
      {content}
    </Link>
  );
}
