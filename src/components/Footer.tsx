"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerContent}>
					{/* Trending Section */}
					<div className={styles.footerCol}>
						<h4 className={styles.footerTitle}>Trending</h4>
						<ul className={styles.footerList}>
							<li>
								<Link href="/">Headphones</Link>
							</li>
							<li>
								<Link href="/">Electronics</Link>
							</li>
							<li>
								<Link href="/">Groceries</Link>
							</li>
							<li>
								<Link href="/">Health & Beauty</Link>
							</li>
							<li>
								<Link href="/">Home Appliances</Link>
							</li>
							<li>
								<Link href="/">Mobile Accessories</Link>
							</li>
						</ul>
					</div>

					{/* Information Section */}
					<div className={styles.footerCol}>
						<h4 className={styles.footerTitle}>Information</h4>
						<ul className={styles.footerList}>
							<li>
								<Link href="/">About Us</Link>
							</li>
							<li>
								<Link href="/">Contact Us</Link>
							</li>
							<li>
								<Link href="/">FAQ</Link>
							</li>
							<li>
								<Link href="/">Blog</Link>
							</li>
							<li>
								<Link href="/">Shipping & Return</Link>
							</li>
							<li>
								<Link href="/">Privacy policy</Link>
							</li>
						</ul>
					</div>

					{/* Customer Care Section */}
					<div className={styles.footerCol}>
						<h4 className={styles.footerTitle}>Customer Care</h4>
						<ul className={styles.footerList}>
							<li>
								<Link href="/">My Account</Link>
							</li>
							<li>
								<Link href="/">Recently Viewed</Link>
							</li>
							<li>
								<Link href="/">Wishlist</Link>
							</li>
							<li>
								<Link href="/">Compare</Link>
							</li>
							<li>
								<Link href="/">Track Order</Link>
							</li>
							<li>
								<Link href="/">Customer Support</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info Section */}
					<div className={styles.footerCol}>
						<h4 className={styles.footerTitle}>Contact Info</h4>
						<div className={styles.contactInfo}>
							<p>
								<strong>Got questions?</strong> Call us 24/7!
							</p>
							<p className={styles.phone}>(031) 111-144</p>
							<p className={styles.email}>info@winstore.pk</p>
							<p className={styles.working}>Working Hours</p>
							<p className={styles.hours}>9:00 AM - 10:00 PM</p>
						</div>
					</div>
				</div>

				{/* Payment Methods */}
				<div className={styles.paymentSection}>
					<h4>We Accept</h4>
					<div className={styles.paymentMethods}>
						<span className={styles.paymentBadge}>VISA</span>
						<span className={styles.paymentBadge}>MASTERCARD</span>
						<span className={styles.paymentBadge}>CASH</span>
						<span className={styles.paymentBadge}>EASY PAISA</span>
					</div>
				</div>

				{/* Social Media */}
				<div className={styles.socialSection}>
					<div className={styles.socialLinks}>
						<Link href="/" title="Facebook" className={styles.socialLink}>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M20 10.0961C20 5.31932 16.4183 1.5 12 1.5C7.58172 1.5 4 5.31932 4 10.0961C4 14.4509 6.92893 18.0659 10.6875 18.4968V12.4313H8.125V10.0961H10.6875V8.23975C10.6875 5.73093 12.2992 4.35627 14.5424 4.35627C15.6518 4.35627 16.8132 4.56147 16.8132 4.56147V7.00647H15.5424C14.2888 7.00647 13.875 7.78637 13.875 8.57751V10.0961H16.6994L16.2738 12.4313H13.875V18.5226C17.4237 18.1332 20 14.5286 20 10.0961Z" />
							</svg>
						</Link>

						<Link href="/" title="Twitter" className={styles.socialLink}>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M19.0396 2.97568C18.3533 3.28481 17.6156 3.48968 16.8359 3.59018C17.6422 3.1165 18.2422 2.36178 18.5267 1.46789C17.7891 1.90925 16.9734 2.23589 16.0890 2.41874C15.3891 1.67604 14.4203 1.16016 13.3234 1.16016C11.2265 1.16016 9.54063 2.8915 9.54063 4.99304C9.54063 5.29322 9.57609 5.58589 9.64609 5.86679C6.41016 5.71428 3.59766 4.21825 1.72266 1.95196C1.38328 2.51589 1.19953 3.1165 1.19953 3.76339C1.19953 5.01071 1.83046 6.10621 2.81328 6.74053C2.17734 6.72339 1.57656 6.55393 1.05000 6.26482C1.05000 6.28196 1.05000 6.30089 1.05000 6.31982C1.05000 8.16911 2.30078 9.73607 3.99766 10.1032C3.66953 10.2004 3.31641 10.2532 2.94844 10.2532C2.70703 10.2532 2.47422 10.2307 2.24922 10.1896C2.71953 11.7343 4.05313 12.8729 5.68125 12.9132C4.44844 13.9775 2.86797 14.6146 1.13281 14.6146C0.8296875 14.6146 0.535625 14.5977 0.25 14.5627C1.89297 15.6845 3.93125 16.3304 6.12578 16.3304C13.3141 16.3304 17.1469 10.3235 17.1469 5.42821C17.1469 5.26696 17.1422 5.10893 17.1344 4.95232C17.8797 4.42393 18.5297 3.76464 19.0396 2.97568Z" />
							</svg>
						</Link>

						<Link href="/" title="LinkedIn" className={styles.socialLink}>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M17.7273 0H2.27273C1.01818 0 0 1.01818 0 2.27273V17.7273C0 18.9818 1.01818 20 2.27273 20H17.7273C18.9818 20 20 18.9818 20 17.7273V2.27273C20 1.01818 18.9818 0 17.7273 0ZM5.90909 16.3636H2.72727V7.5H5.90909V16.3636ZM4.31818 6.18182C3.36364 6.18182 2.59091 5.40909 2.59091 4.45455C2.59091 3.5 3.36364 2.72727 4.31818 2.72727C5.27273 2.72727 6.04545 3.5 6.04545 4.45455C6.04545 5.40909 5.27273 6.18182 4.31818 6.18182ZM17.6364 16.3636H14.4545V12C14.4545 10.9545 14.4545 9.54545 12.8636 9.54545C11.2727 9.54545 11.0227 10.7045 11.0227 11.9045V16.3636H7.84091V7.5H10.8818V8.77273H10.9227C11.3409 7.95455 12.3409 7.08182 13.8636 7.08182C17.0909 7.08182 17.6364 9.09091 17.6364 11.7727V16.3636Z" />
							</svg>
						</Link>

						<Link href="/" title="Instagram" className={styles.socialLink}>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M10 1.80019C12.6734 1.80019 13.0034 1.81329 14.1205 1.85795C15.1689 1.89943 15.7563 2.05432 16.1705 2.17862C16.7046 2.34241 17.107 2.55619 17.5234 2.97253C17.9397 3.38887 18.1535 3.79127 18.3174 4.32536C18.4417 4.73959 18.5966 5.32698 18.6381 6.37537C18.6827 7.49242 18.6958 7.82242 18.6958 10.4958C18.6958 13.1692 18.6827 13.4992 18.6381 14.6162C18.5966 15.6646 18.4417 16.252 18.3174 16.6662C18.1535 17.2003 17.9397 17.6027 17.5234 18.0191C17.107 18.4354 16.7046 18.6492 16.1705 18.813C15.7563 18.9373 15.1689 19.0922 14.1205 19.1337C13.0034 19.1783 12.6734 19.1914 10 19.1914C7.32657 19.1914 6.99657 19.1783 5.87951 19.1337C4.83112 19.0922 4.24373 18.9373 3.82951 18.813C3.29541 18.6492 2.89301 18.4354 2.47667 18.0191C2.06033 17.6027 1.84655 17.2003 1.68276 16.6662C1.55846 16.252 1.40357 15.6646 1.36209 14.6162C1.31743 13.4992 1.30433 13.1692 1.30433 10.4958C1.30433 7.82242 1.31743 7.49242 1.36209 6.37537C1.40357 5.32698 1.55846 4.73959 1.68276 4.32536C1.84655 3.79127 2.06033 3.38887 2.47667 2.97253C2.89301 2.55619 3.29541 2.34241 3.82951 2.17862C4.24373 2.05432 4.83112 1.89943 5.87951 1.85795C6.99657 1.81329 7.32657 1.80019 10 1.80019ZM10 5.03814C7.16376 5.03814 4.84248 7.35942 4.84248 10.1957C4.84248 13.0319 7.16376 15.3532 10 15.3532C12.8362 15.3532 15.1575 13.0319 15.1575 10.1957C15.1575 7.35942 12.8362 5.03814 10 5.03814ZM10 13.5514C8.18857 13.5514 6.71617 12.079 6.71617 10.2675C6.71617 8.45611 8.18857 6.98371 10 6.98371C11.8114 6.98371 13.2838 8.45611 13.2838 10.2675C13.2838 12.079 11.8114 13.5514 10 13.5514ZM15.3316 4.7708C15.3316 5.38945 14.8431 5.87799 14.2245 5.87799C13.6058 5.87799 13.1173 5.38945 13.1173 4.7708C13.1173 4.15216 13.6058 3.66361 14.2245 3.66361C14.8431 3.66361 15.3316 4.15216 15.3316 4.7708Z" />
							</svg>
						</Link>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className={styles.footerBottom}>
				<div className={styles.container}>
					<p>© 2024 WINstore. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
}
