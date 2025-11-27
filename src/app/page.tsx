"use client";

import Link from "next/link";
import Slider from "@/components/Slider";
import styles from "./page.module.css";

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
					<h2 className={styles.sectionTitle}>Shop by Category</h2>
					<div className={styles.categoriesGrid}>
						<Link href="/" className={styles.categoryCard}>
							<div className={styles.categoryImage}>
								<svg
									width="80"
									height="80"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
									<path d="M2 17h20"></path>
								</svg>
							</div>
							<h3 className={styles.categoryName}>Electronics</h3>
						</Link>

						<Link href="/" className={styles.categoryCard}>
							<div className={styles.categoryImage}>
								<svg
									width="80"
									height="80"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path d="M6 4h12v12H6z"></path>
									<path d="M8 16h8"></path>
								</svg>
							</div>
							<h3 className={styles.categoryName}>Fashion</h3>
						</Link>

						<Link href="/" className={styles.categoryCard}>
							<div className={styles.categoryImage}>
								<svg
									width="80"
									height="80"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<circle cx="9" cy="21" r="1"></circle>
									<circle cx="20" cy="21" r="1"></circle>
									<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
								</svg>
							</div>
							<h3 className={styles.categoryName}>Appliances</h3>
						</Link>

						<Link href="/" className={styles.categoryCard}>
							<div className={styles.categoryImage}>
								<svg
									width="80"
									height="80"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
								>
									<path d="M12 2L15.09 8.26H22L17.45 12.88L19.54 19.74L12 15.12L4.46 19.74L6.55 12.88L2 8.26H8.91L12 2Z"></path>
								</svg>
							</div>
							<h3 className={styles.categoryName}>Babies Store</h3>
						</Link>
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
