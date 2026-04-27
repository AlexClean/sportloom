import * as React from "react";
import Image from 'next/image';
import SpecsTable from "../reviews/SpecsTable";
import { ReviewProductEntry } from "@/Interfaces/reviewTypes";
import { getProductByKey } from "@/data/catalog";
import Link from "next/link";


export default function ReviewItem({
   productKey, subtitle, details, className
}: ReviewProductEntry) {

  //const specs = getSpecsByKey(anchor ?? "default");
  const product = getProductByKey(productKey);


  return (
    <section aria-labelledby={product?.title} className={["", className].filter(Boolean).join(" ")}>
      <header className="mb-2">
        <h2 id={productKey} className="scroll-mt-20">{product?.title} - <strong className="text-3xl">{subtitle}</strong></h2>
        {product && <SpecsTable specs={product.specs} />}
        {product && (
          <Image
            src={product.image.src}
            alt={product.image.alt}
            width={360}
            height={480}
            className="rounded-xl ml-2 w-[320px] h-auto"
          priority
          sizes="(min-width: 768px) 160px, 30vw"
        />)}
      </header>
      <div className="mt-4 space-y-2 text-xl">
        {details.map((section, index) => (
          section.content && (
            <div key={index} className="group">
              <h3 className="font-semibold">{section.label}</h3>
              <p>{section.content}</p>
            </div>

          )))}
      </div>

      <div className="mb-3">
        {product?.affiliateUrl && (
          <Link
            href={product.affiliateUrl}
            target="_blank"
            rel="sponsored noopener nofollow"
            className="text-blue-600 hover:underline"
          >
            View on Amazon →
          </Link>
        )}
      </div>
    </section>
  );
}
