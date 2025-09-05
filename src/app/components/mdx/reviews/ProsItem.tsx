import * as React from "react";

export default function ProsItem({
  items,
  className,
}: { items: string[]; className?: string }) {
  if (!items?.length) return null;
  return (
    <ul className={["list-disc pl-5 text-emerald-800", className].filter(Boolean).join(" ")}>
      {items.map((x) => <li key={x}>{x}</li>)}
    </ul>
  );
}
