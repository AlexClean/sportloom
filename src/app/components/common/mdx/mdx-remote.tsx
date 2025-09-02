import { ArrowRight, CircleCheck, HandCoins, ShieldCheck, ShoppingCart, Zap } from 'lucide-react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AnchorLink, InternalLinkButton } from '../button/InernalLinkButton/InternalLinkButtons';

type H1Props = React.ComponentProps<"h1">;

const components = {
  h1: (props: H1Props) => (
    <h1 {...props} className="large-text">
    </h1>
  ),

  Link: Link,
  Image: Image,
  ShoppingCart: ShoppingCart,
  AnchorLink: AnchorLink,
  InternalLinkButton: InternalLinkButton,
  ArrowRight: ArrowRight,
  CircleCheck: CircleCheck,
  HandCoins: HandCoins,
  ShieldCheck: ShieldCheck,
  Zap: Zap
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}