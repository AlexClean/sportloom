import { ReactNode } from "react";
import { LinkBase } from "../LinkBase/LinkBase";

type Props = { href: string; children: ReactNode; className?: string };

export function InternalLinkButton({ href, children, className }: Props) {
  return (
    <LinkBase href={href} variant="cta" className={className}>
      {children}
    </LinkBase>
  );
}

export function AnchorLink({ href, children, className }: Props) {
  return (
    <LinkBase href={href} variant="anchor" withIcon className={className}>
      {children}
    </LinkBase>
  );
}

export function InlineLink({ href, children, className }: Props) {
  return (
    <LinkBase href={href} variant="text" className={className}>
      {children}
    </LinkBase>
  );
}
