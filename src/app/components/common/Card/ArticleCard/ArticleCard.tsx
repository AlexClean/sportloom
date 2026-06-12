// components/cards/ArticleCard.tsx
import type { ReactNode } from "react";
import { CardBase } from "../CardBase";
import {InternalLinkButton} from "@/app/components/common/Button/InternalLinkButton/InternalLinkButtons";

type Props = {
  href: string;
  title: string;
  excerpt?: string;
  readingTime?: string; 
  media?: ReactNode;
  badgeText?: string;  
  className?: string;
};

export function ArticleCard({
  href,
  title,
  excerpt,
  readingTime,
  media,
  badgeText = "Guide",
  className,
}: Props) {
  return (
    <CardBase
      href={href}
      title={title}
      excerpt={excerpt}
      media={media}
      metaLeft={<span className="inline-flex items-center rounded bg-emerald-50 px-2 py-0.5 text-emerald-700">{badgeText}</span>}
      metaRight={readingTime ? <span>{readingTime}</span> : null}
      cta={<InternalLinkButton href={href}>Read article →</InternalLinkButton>}
      className={className}
    />
  );
}
