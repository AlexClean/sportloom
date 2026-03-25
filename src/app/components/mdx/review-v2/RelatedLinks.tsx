import type { ReviewLinkItem } from "@/Interfaces/reviewTypes";

type Props = {
  links: ReviewLinkItem[];
  title?: string;
};

export function RelatedLinks({
  links,
  title = "Keep Learning",
}: Props) {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-extrabold text-slate-900">{title}</h2>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}