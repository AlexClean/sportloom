import * as React from "react";

type ReviewItemProps = {
  title: string;
  subtitle?: string;
  description?: string;
  price?: string;
  asin?: string;
  className?: string;        // для оверрайда стиля
  badge?: string;
};

export default function ReviewItem({
  title, subtitle, description, price, asin, className, badge,
}: ReviewItemProps) {
  return (
    <section className={["rounded-2xl border p-4 shadow-sm bg-white", className].filter(Boolean).join(" ")}>
      <header className="mb-2">
        <h3 className="text-xl font-bold dark: text-slate-900">{title}</h3>
        {subtitle && <p className="text-slate-600">{subtitle}</p>}
        {badge && <span className="inline-block mt-1 rounded bg-emerald-100 px-2 py-0.5 text-xs text-emerald-800">{badge}</span>}
      </header>

      {description && <p className="text-slate-700 leading-relaxed">{description}</p>}

      <div className="mt-3 text-sm text-slate-800 flex items-center gap-3">
        {price && <span className="font-medium">{price}</span>}
        {asin && (
          <a
            href={`https://www.amazon.com/dp/${asin}`}
            target="_blank"
            rel="sponsored noopener nofollow"
            className="text-blue-600 hover:underline"
          >
            View on Amazon →
          </a>
        )}
      </div>
    </section>
  );
}
