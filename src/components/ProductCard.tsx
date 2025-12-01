import Image from "next/image";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
	image: string;
	brand: string;
	title: string;
	originalPrice: string;
	salePrice: string;
	onAddToCart?: () => void;
}

export default function ProductCard({
	image,
	brand,
	title,
	originalPrice,
	salePrice,
	onAddToCart,
}: ProductCardProps) {
	return (
		<div className={styles.productCard}>
			<div className={styles.productImage}>
				<Image
					src={image}
					alt={title}
					width={200}
					height={200}
					style={{ objectFit: "contain" }}
					priority={false}
				/>
			</div>
			<div className={styles.productInfo}>
				<p className={styles.brand}>{brand}</p>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.priceSection}>
					<span className={styles.originalPrice}>{originalPrice}</span>
					<span className={styles.salePrice}>{salePrice}</span>
				</div>
				<button className={styles.addToCartBtn} onClick={onAddToCart}>
					Add to cart
				</button>
			</div>
		</div>
	);
}
