import type { ReviewProduct } from "@/Interfaces/reviewTypes";

type Props = {
  products: ReviewProduct[];
};

export function ComparisonTable({ products }: Props) {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-extrabold text-slate-900">
        Comparison Table
      </h2>

      <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="border-b bg-slate-100 text-left">
              <th className="p-3 font-semibold text-slate-900">Glove</th>
              <th className="p-3 font-semibold text-slate-900">Best for</th>
              <th className="p-3 font-semibold text-slate-900">Price</th>
              <th className="p-3 font-semibold text-slate-900">Link</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b last:border-b-0">
                <td className="p-3 font-medium text-slate-900">
                  {product.name}
                </td>
                <td className="p-3 text-slate-700">{product.subtitle}</td>
                <td className="p-3 text-slate-700">{product.price}</td>
                <td className="p-3">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="font-medium text-blue-700 underline underline-offset-2"
                  >
                    Check price
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}