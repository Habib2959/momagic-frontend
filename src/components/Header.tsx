"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaInstagram,
	FaHeadphones,
} from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
	const [selectedCategory, setSelectedCategory] = useState("All categories");
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const categories = [
		"All categories",
		"Electronics",
		"Fashion",
		"Appliances",
		"Babies Store",
	];

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category);
		setDropdownOpen(false);
	};
	return (
		<header className={styles.header}>
			{/* Main Header - with logo, search, and user icons */}
			<div className={styles.mainHeader}>
				<div className={styles.container}>
					<div className={styles.mainHeaderContent}>
						<div className={styles.topLeft}>
							<div className={styles.logo}>
								<Link href="/">
									<Image
										src="/logo.png"
										alt="WIN store logo"
										width={120}
										height={50}
										priority
									/>
								</Link>
							</div>{" "}
							<div className={styles.searchWrapper}>
								<div
									className={styles.category}
									onClick={() => setDropdownOpen(!dropdownOpen)}
								>
									{selectedCategory}
									<span className={styles.arrow}>▼</span>
									{dropdownOpen && (
										<div className={styles.categoryDropdown}>
											{categories.map((cat) => (
												<div
													key={cat}
													className={styles.categoryOption}
													onClick={() => handleCategoryClick(cat)}
												>
													{cat}
												</div>
											))}
										</div>
									)}
								</div>

								<div className={styles.divider}></div>

								<input
									type="text"
									className={styles.searchInput}
									placeholder="Search for products"
								/>

								<button className={styles.searchBtn}>
									<FiSearch size={20} />
								</button>
							</div>
						</div>
						<div className={styles.topRight}>
							<div className={styles.accountSection}>
								<div className={styles.accountLabel}>
									<span className={styles.loginText}>Call Us Now</span>
									<Link href="tel:+923115827918" className={styles.phoneNumber}>
										<FaHeadphones size={20} />
										+0311 5827918
									</Link>
									<span className={styles.loginText}>Sign in</span>
								</div>
								<Link href="/" title="Account" className={styles.accountIcon}>
									<FiUser size={24} />
								</Link>
							</div>
							<Link href="/" title="Wishlist" className={styles.icon}>
								<FiHeart size={20} />
							</Link>
							<Link href="/" title="Cart" className={styles.cartIcon}>
								<FiShoppingCart size={20} />
								<span className={styles.cartBadge}>3</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Navigation Bar */}
			<div className={styles.bottomNav}>
				<div className={styles.container}>
					<div className={styles.bottomNavContent}>
						<div className={styles.navMenu}>
							<button className={styles.menuToggle}>
								<MdMenu size={20} />
								Browse By Category
							</button>
							<nav className={styles.navLinks}>
								<Link href="/">Home</Link>
								<Link href="/">Easy Monthly Installments</Link>
								<Link href="/">Shop by Brands</Link>
								<Link href="/">Become a Vendor</Link>
							</nav>
						</div>

						<div className={styles.socialLinks}>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								title="Facebook"
								className={styles.socialLink}
							>
								<FaFacebook size={18} />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								title="Twitter"
								className={styles.socialLink}
							>
								<FaTwitter size={18} />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								title="LinkedIn"
								className={styles.socialLink}
							>
								<FaLinkedin size={18} />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								title="Instagram"
								className={styles.socialLink}
							>
								<FaInstagram size={18} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
