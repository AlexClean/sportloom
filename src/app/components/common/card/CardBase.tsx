// components/cards/CardBase.tsx
import Link from "next/link";
import type { ReactNode } from "react";

type CardBaseProps = {
  href: string;           // внутренняя ссылка на детальную
  title: string;
  excerpt?: string;
  media?: ReactNode;      // картинка/плейсхолдер
  metaLeft?: ReactNode;   // бедж/тип (Review/Guide)
  metaRight?: ReactNode;  // рейтинг/дата/время чтения
  cta?: ReactNode;        // кнопка "Read more"
  className?: string;
};

export default function CardBase({
  href,
  title,
  excerpt,
  media,
  metaLeft,
  metaRight,
  cta,
  className,
}: CardBaseProps) {
  return (
    <article className={`flex flex-col gap-2 border rounded-2xl border-gray-100 p-3 ${className ?? ""}`}>
      {media}
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
        <div>{metaLeft}</div>
        <div>{metaRight}</div>
      </div>
      <h2 className="text-lg font-semibold line-clamp-2 h-14 content-center">
        <Link href={href} className="hover:underline">
          {title}
        </Link>
      </h2>
      {excerpt && <p className="text-sm text-gray-600 dark:text-gray-200 line-clamp-3">{excerpt}</p>}
      {cta && <div className="mt-auto">{cta}</div>}
    </article>
  );
}
