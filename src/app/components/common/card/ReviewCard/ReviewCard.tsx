// components/cards/ReviewCard.tsx
import type { ReactNode } from "react";
import { CardBase } from "../CardBase";
import {InternalLinkButton} from "../../Button/InernalLinkButton/InternalLinkButtons";

type Props = {
  href: string;
  title: string;
  excerpt?: string;
  rating?: number;        
  media?: ReactNode;
  badgeText?: string;     
  className?: string;
};

export function ReviewCard({
  href,
  title,
  excerpt,
  rating,
  media,
  badgeText = "Review",
  className,
}: Props) {
  return (
    <CardBase
      href={href}
      title={title}
      excerpt={excerpt}
      media={media}
      metaLeft={<span className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-blue-700">{badgeText}</span>}
      metaRight={typeof rating === "number" ? <span>★ {rating.toFixed(1)}</span> : null}
      cta={<InternalLinkButton href={href}>Read review →</InternalLinkButton>}
      className={className}
    />
  );
}
