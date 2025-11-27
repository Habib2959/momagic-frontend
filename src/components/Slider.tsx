"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Slider.module.css";

const sliderData = [
	{
		id: 1,
		title: "Shop Computer Experience",
		subtitle:
			"You Control Your Pocket Quality Into the Product Its Affinity. I Am Not A Product Of My Circumstances. I Am A Product Of My Decisions.",
		image:
			"https://images.unsplash.com/photo-1552391784-5d440642117f?w=1200&h=500&fit=crop",
		cta: "View More",
		link: "/",
	},
	{
		id: 2,
		title: "Latest Electronics",
		subtitle:
			"Discover the newest technology and gadgets with special discounts.",
		image:
			"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&h=500&fit=crop",
		cta: "Shop Now",
		link: "/",
	},
	{
		id: 3,
		title: "Fashion Trends",
		subtitle: "Explore the latest fashion collections and seasonal offers.",
		image:
			"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&h=500&fit=crop",
		cta: "Explore",
		link: "/",
	},
];

export default function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [autoPlay, setAutoPlay] = useState(true);

	useEffect(() => {
		if (!autoPlay) return;

		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % sliderData.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [autoPlay]);

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
		setAutoPlay(false);
		setTimeout(() => setAutoPlay(true), 1000);
	};

	const goToPrevious = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + sliderData.length) % sliderData.length
		);
		setAutoPlay(false);
		setTimeout(() => setAutoPlay(true), 1000);
	};

	const goToNext = () => {
		setCurrentSlide((prev) => (prev + 1) % sliderData.length);
		setAutoPlay(false);
		setTimeout(() => setAutoPlay(true), 1000);
	};

	return (
		<div className={styles.slider}>
			<div className={styles.sliderContainer}>
				{sliderData.map((slide, index) => (
					<div
						key={slide.id}
						className={`${styles.slide} ${
							index === currentSlide ? styles.active : ""
						}`}
					>
						<Image
							src={slide.image}
							alt={slide.title}
							className={styles.slideImage}
							width={1200}
							height={500}
							priority={index === currentSlide}
						/>
						<div className={styles.slideContent}>
							<div className={styles.container}>
								<h1 className={styles.slideTitle}>{slide.title}</h1>
								<p className={styles.slideSubtitle}>{slide.subtitle}</p>
								<Link href={slide.link}>
									<button className={styles.ctaButton}>{slide.cta}</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Navigation Buttons */}
			<button
				className={`${styles.navButton} ${styles.prevButton}`}
				onClick={goToPrevious}
				aria-label="Previous slide"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
				>
					<path
						d="M15 19l-7-7 7-7"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>

			<button
				className={`${styles.navButton} ${styles.nextButton}`}
				onClick={goToNext}
				aria-label="Next slide"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
				>
					<path
						d="M9 5l7 7-7 7"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>

			{/* Indicators */}
			<div className={styles.indicators}>
				{sliderData.map((_, index) => (
					<button
						key={index}
						className={`${styles.indicator} ${
							index === currentSlide ? styles.active : ""
						}`}
						onClick={() => goToSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
