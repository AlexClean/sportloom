import Image from "next/image";
import Link from "next/link";
import { getProductByKey } from "@/data/catalog";
import styles from "./ProductMention.module.css";

type ProductMentionProps = {
    productKey: string;
    badge?: string;
    reason: string;
};

export function ProductMention({
    productKey,
    badge = "Recommended pick",
    reason
}: ProductMentionProps) {
    const product = getProductByKey(productKey);

    if (!product) return null;

    return (
        <aside className={styles.productMention}>
            <div className={styles.badge}>{badge}</div>

            <div className={styles.inner}>
                <Link
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="sponsored noopener nofollow"
                    className={styles.imageLink}
                >
                    <Image
                        src={product.image.src || "/images/default-cover.webp"}
                        alt={product.image.alt || product.title}
                        width={387}
                        height={255}
                        sizes="(max-width: 768px) 120px, 180px"
                        className={styles.image}
                    />
                </Link>

                <div className={styles.content}>
                    <div className={styles.brand}>
                        {product.brand}
                    </div>

                    <h3 className={styles.title}>
                        {product.title}
                    </h3>

                    <p className={styles.reason}>
                        {reason}
                    </p>

                    <ul className={styles.highlights}>
                        <li>Best for: {product.specs.bestFor}</li>
                        <li>Fit: {product.specs.fit}</li>
                        {/* <li>Price: {product.price}</li> */}
                    </ul>

                    <Link
                        href={product.affiliateUrl}
                        target="_blank"
                        rel="sponsored noopener nofollow"
                        className={styles.button}
                    >
                        Check Current Price
                    </Link>
                </div>
            </div>
        </aside>
    );
}