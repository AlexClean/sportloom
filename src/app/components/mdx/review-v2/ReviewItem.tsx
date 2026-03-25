import * as React from "react";
import Image from 'next/image';
import { getSpecsByKey } from "@/data/products";
import SpecsTable from "../reviews/SpecsTable";
import { ReviewProduct } from "@/Interfaces/reviewTypes";



export default function ReviewItem({
  title, anchor, subtitle, imgUrl, amazonUrl, details, className
}: ReviewProduct) {

  const specs = getSpecsByKey(anchor ?? "default");

  return (
    <section aria-labelledby={title} className={["", className].filter(Boolean).join(" ")}>
      <header className="mb-2">
        <h2 id={anchor} className="scroll-mt-20">{title} - <strong className="text-3xl">{subtitle}</strong></h2>
        <SpecsTable specs={specs} />
        <Image
          src={imgUrl}
          alt={title}
          width={360}
          height={480}
          className="rounded-xl ml-2 w-[320px] h-auto"
          priority
          sizes="(min-width: 768px) 160px, 30vw"
        />
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
        {amazonUrl && (
          <a
            href={amazonUrl}
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
