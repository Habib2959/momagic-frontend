"use client";

import Link from "next/link";
import Slider from "@/components/Slider";
import CategoryCard from "@/components/CategoryCard";
import styles from "./page.module.css";

const categories = [
	{
		id: 2,
		title: "Fashion",
		image:
			"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
		link: "/category/fashion",
	},
];

export default function Home() {
	return (
		<div className={styles.page}>
			{/* Hero Slider */}
			<section className={styles.sliderSection}>
				<Slider />
			</section>

			{/* Shop by Category Section */}
			<section className={styles.categoriesSection}>
				<div className={styles.container}>
					<div className={styles.categoriesGrid}>
						{categories.map((category) => (
							<CategoryCard
								key={category.id}
								image={category.image}
								title={category.title}
								link={category.link}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Featured Products Section */}
			<section className={styles.productsSection}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>New Arrivals</h2>
					<div className={styles.productsGrid}>
						{[1, 2, 3, 4, 5, 6].map((product) => (
							<Link href="/" key={product} className={styles.productCard}>
								<div className={styles.productImage}>
									<svg
										width="120"
										height="120"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
									>
										<rect
											x="2"
											y="3"
											width="20"
											height="14"
											rx="2"
											ry="2"
										></rect>
										<path d="M2 17h20"></path>
									</svg>
								</div>
								<div className={styles.productInfo}>
									<h3 className={styles.productName}>Product {product}</h3>
									<p className={styles.productBrand}>Brand Name</p>
									<div className={styles.productPrice}>
										<span className={styles.originalPrice}>₨ 50,000</span>
										<span className={styles.salePrice}>₨ 35,000</span>
									</div>
									<button className={styles.addToCart}>Add to cart</button>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Best Deals Section */}
			<section className={styles.dealsSection}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>Best Deals</h2>
					<div className={styles.dealsNav}>
						<Link href="/" className={styles.dealTab}>
							Kitchen Appliances
						</Link>
						<Link href="/" className={styles.dealTab}>
							Consoles
						</Link>
						<Link href="/" className={styles.dealTab}>
							TV & Videos
						</Link>
						<Link href="/" className={styles.dealTab}>
							Cell Phones
						</Link>
						<Link href="/" className={styles.dealTab}>
							Grocery
						</Link>
					</div>
					<div className={styles.dealsGrid}>
						{[1, 2, 3, 4].map((deal) => (
							<Link href="/" key={deal} className={styles.dealCard}>
								<div className={styles.dealImage}>
									<svg
										width="150"
										height="150"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
									>
										<rect
											x="2"
											y="3"
											width="20"
											height="14"
											rx="2"
											ry="2"
										></rect>
										<path d="M2 17h20"></path>
									</svg>
								</div>
								<div className={styles.dealInfo}>
									<p className={styles.dealBrand}>Brand Name</p>
									<h3 className={styles.dealTitle}>Product Title</h3>
									<p className={styles.dealPrice}>₨ 65,208</p>
									<p className={styles.dealOriginal}>₨ 66,000</p>
									<p className={styles.dealSaved}>Save 10%</p>
									<p className={styles.dealSold}>Already Sold: 6</p>
									<p className={styles.dealAvailable}>Available: 30</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
