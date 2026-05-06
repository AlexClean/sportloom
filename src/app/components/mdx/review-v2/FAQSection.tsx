import type { ReviewFaqItem } from "@/Interfaces/reviewTypes";

type Props = {
  items: ReviewFaqItem[];
};

export function FAQSection({ items }: Props) {
  return (
    <section className="my-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold not-dark:text-slate-900 text-center">Frequently Asked Questions</h2>

      <div className="mt-4 space-y-4 dark:text-slate-100">
        {items.map((item) => (
          <details
            key={item.question}
            className="rounded-xl border border-slate-200 not-dark:bg-white p-4 shadow-sm"
          >
            <summary className="cursor-pointer font-semibold not-dark:text-slate-900">
              {item.question}
            </summary>
            <p className="mt-3 leading-relaxed not-dark:text-slate-700">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}