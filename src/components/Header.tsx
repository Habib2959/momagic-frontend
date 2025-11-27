"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.headerContent}>
					<div className={styles.logo}>
						<Link href="/">
							<span className={styles.logoText}>WIN Store</span>
						</Link>
					</div>

					<nav className={styles.navbar}>
						<ul className={styles.navList}>
							<li>
								<Link href="/">Browse by Category</Link>
							</li>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/">Easy Monthly Installments</Link>
							</li>
							<li>
								<Link href="/">Shop by Brands</Link>
							</li>
							<li>
								<Link href="/">Become a Vendor</Link>
							</li>
						</ul>
					</nav>

					<div className={styles.headerRight}>
						<input
							type="text"
							placeholder="Search for products..."
							className={styles.searchInput}
						/>
						<button className={styles.searchBtn}>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path
									d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
									stroke="currentColor"
									strokeWidth="2"
								/>
								<path d="M15 15L19 19" stroke="currentColor" strokeWidth="2" />
							</svg>
						</button>

						<div className={styles.headerIcons}>
							<Link href="/" title="Account">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
									<circle
										cx="12"
										cy="8"
										r="4"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<path
										d="M4 20c0-4 3.5-7 8-7s8 3 8 7"
										stroke="currentColor"
										strokeWidth="2"
									/>
								</svg>
							</Link>

							<Link href="/" title="Wishlist">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
										stroke="currentColor"
										strokeWidth="2"
										fill="none"
									/>
								</svg>
							</Link>

							<Link href="/" title="Cart">
								<div className={styles.cartBadge}>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M9 2L6 6H3V8H5L7 20H19L21 8H23V6H20L17 2H9Z"
											stroke="currentColor"
											strokeWidth="2"
											fill="none"
										/>
									</svg>
									<span className={styles.badge}>0</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
