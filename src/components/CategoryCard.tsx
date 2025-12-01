import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
	image: string;
	title: string;
	link: string;
}

export default function CategoryCard({
	image,
	title,
	link,
}: CategoryCardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.cardInner}>
				<Image
					src={image}
					alt={title}
					width={430}
					height={280}
					style={{ objectFit: "cover", display: "block" }}
					priority={false}
				/>
			</div>
			<div className={styles.cardLabel}>
				<span className={styles.cardLabelText}>{title}</span>
				<Link href={link} className={styles.cardLabelLink}>
					Shop
				</Link>
			</div>
		</div>
	);
}
