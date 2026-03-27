import { ProductSpecs } from "@/Interfaces/reviewTypes";
//import { BoxingReviewSpecs } from "@/Interfaces/types";
import React from "react";

type Props = { specs: ProductSpecs; className?: string };

const LABELS: Record<keyof ProductSpecs, string> = {
  weights: "Weights",
  material: "Material",
  closure: "Closure",
  fit: "Fit",
  bestFor: "Best for",
};

export default function SpecsTable({ specs, className }: Props) {
  const entries = (Object.keys(specs) as (keyof ProductSpecs)[])
    .filter((k) => specs[k]); // show only filled filds

  if (entries.length === 0) return null;

  return (
    <div className={className ?? "my-3 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm"}>
      <h3 className="font-semibold">Quick Specs</h3>
      <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
        {entries.map((k) => (
          <React.Fragment key={k}>
            <dt className="text-slate-500">{LABELS[k]}</dt>
            <dd>{specs[k]}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
}
