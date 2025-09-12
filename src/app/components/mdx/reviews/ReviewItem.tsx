import * as React from "react";
import Image from 'next/image'
import { ReactNode } from "react";
import { BoxingReviewSpecs } from "@/Interfaces/types";
import { getSpecsByKey } from "@/data/products";
import SpecsTable from "./SpecsTable";

type ReviewItemProps = {
  title: string;
  subtitle?: string;
  ImgUrl: string;
  asin?: string;
  anchor?: string;
  className?: string;
  children: ReactNode;
  specs?: BoxingReviewSpecs;
};

export default function ReviewItem({
  title, anchor, subtitle, ImgUrl, asin, className, children
}: ReviewItemProps) {

  const specs = getSpecsByKey(anchor ?? "default");
  console.log('specs result is -> ', specs);

  return (
    <section aria-labelledby={title} className={["", className].filter(Boolean).join(" ")}>
      <header className="mb-2">
        <h2 id={anchor} className="scroll-mt-20">{title} - <strong className="text-3xl">{subtitle}</strong></h2>
        <SpecsTable specs={specs} />
        <Image
          src={ImgUrl}
          alt={title}
          width={360}
          height={480}
          className="rounded-xl ml-2 w-[320px] h-auto"
          priority
          sizes="(min-width: 768px) 160px, 30vw"
        />
      </header>
      <div className="mt-4 space-y-2 text-xl">
         {children}
      </div>
     
      <div className="mb-3">
        {asin && (
          <a
            href={`${asin}`}
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
