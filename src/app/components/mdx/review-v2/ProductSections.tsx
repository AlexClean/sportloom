import type { ReviewProduct } from "@/Interfaces/reviewTypes";

type Props = {
  products: ReviewProduct[];
};

export function ProductSections({ products }: Props) {
  return (
    <section className="my-10 space-y-8">
      {products.map((product) => (
        <section
          key={product.id}
          id={product.id}
          className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm font-semibold text-blue-700">
            {product.badge}
          </p>

          <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
            {product.name}
          </h2>

          <p className="mt-1 text-sm text-slate-500">{product.price}</p>

          <p className="mt-4 leading-relaxed text-slate-700">
            {product.summary}
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-slate-900">
                Why it stands out
              </h3>
              <p className="mt-1 leading-relaxed text-slate-700">
                {product.whyItStandsOut}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Fit & comfort</h3>
              <p className="mt-1 leading-relaxed text-slate-700">
                {product.fitAndComfort}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Use case</h3>
              <p className="mt-1 leading-relaxed text-slate-700">
                {product.useCase}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">Bottom line</h3>
              <p className="mt-1 leading-relaxed text-slate-700">
                {product.bottomLine}
              </p>
            </div>
          </div>

          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Check price on Amazon
          </a>
        </section>
      ))}
    </section>
  );
}