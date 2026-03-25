import type { ReviewVerdictItem } from "@/Interfaces/reviewTypes";

type Props = {
  items: ReviewVerdictItem[];
};

export function FinalVerdict({ items }: Props) {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-extrabold text-slate-900">
        Final Verdict
      </h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={`${item.title}-${item.badge}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-semibold text-blue-700">{item.badge}</p>
            <h3 className="mt-1 text-lg font-bold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}