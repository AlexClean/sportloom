import * as React from "react";
import Image from 'next/image'
import { ReactNode } from "react";

type ReviewItemProps = {
  title: string;
  subtitle?: string;
  ImgUrl: string;
  asin?: string;
  anchor?: string;
  className?: string;
  children: ReactNode
};

export default function ReviewItem({
  title, anchor, subtitle, ImgUrl, asin, className, children
}: ReviewItemProps) {
  return (
    <section aria-labelledby={title} className={["", className].filter(Boolean).join(" ")}>
      <header className="mb-2">
        <h2 id={anchor} className="scroll-mt-20">{title} - <strong className="text-3xl">{subtitle}</strong></h2>
        <div className="my-3 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
          <h3 className="font-semibold">Quick Specs</h3>
          <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
            <dt className="text-slate-500">Weights</dt><dd>10–16 oz</dd>
            <dt className="text-slate-500">Material</dt><dd>Synthetic leather</dd>
            <dt className="text-slate-500">Closure</dt><dd>Velcro</dd>
            <dt className="text-slate-500">Fit</dt><dd>Snug in 10–12 oz; wide hands start 14–16</dd>
            <dt className="text-slate-500">Best for</dt><dd>Value, bag & mitts, light partner drills</dd>
          </dl>
        </div>
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
