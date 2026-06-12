import * as React from "react";
import Image from 'next/image';
import { SpecsTable } from "@/app/components/content/review/SpecTable/SpecsTable";
import { ReviewProductEntry } from "@/Interfaces/reviewTypes";
import { getProductByKey } from "@/data/catalog";
import Link from "next/link";
import styles from "./ReviewItem.module.css";

export function ReviewItem({
  productKey, subtitle, details, className, summary
}: ReviewProductEntry) {

  const product = getProductByKey(productKey);

  return (
    <section aria-labelledby={product?.title} className={["", className].filter(Boolean).join(" ")}>
      <header className={styles.item_header}>
        <h2 id={productKey} >{product?.title} - <strong >{subtitle}</strong></h2>
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
      <div className={styles.item_section}>
        {details.map((section, index) => (
          section.content && (
            <div key={index}>
              <h3 className={styles.item_title}>{section.label}</h3>
              <p>{section.content}</p>
            </div>

          )))}
        <div>
          <h3 className={styles.item_title}>Summary</h3>
          <p>{summary}</p>
        </div>
        <div>
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
      </div>

    </section>
  );
}
