import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig, siteUrl } from "@/config/site";

const path = "/blog/seamless-gutter-installation-essex-county-nj";
const pageUrl = new URL(path, siteUrl).toString();
const imageUrl = `${siteUrl}/blog/gutterinstallation-blog.webp`;

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: "Seamless Gutter Installation in Essex County, NJ | Gutama Home Improvement",
	description:
		"Looking for trusted seamless gutter installation in Essex County, NJ? Gutama Home Improvement provides professional gutter installation, repairs, and exterior home improvement services.",
	keywords: [
		"seamless gutter installation Essex County NJ",
		"gutter installation NJ",
		"seamless gutters Essex County",
		"gutter repair NJ",
		"roofing contractors Essex County NJ",
		"exterior home improvement NJ",
	],
	authors: [{ name: siteConfig.business.name }],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
	alternates: {
		canonical: pageUrl,
	},
	openGraph: {
		type: "article",
		title: "Seamless Gutter Installation in Essex County, NJ | Gutama Home Improvement",
		description:
			"Professional seamless gutter installation in Essex County, NJ with expert gutter services, repairs, and water protection for your home.",
		url: pageUrl,
		siteName: siteConfig.business.name,
		images: [
			{
				url: imageUrl,
				width: 1200,
				height: 630,
				alt: "Seamless gutter installation in Essex County, NJ",
			},
		],
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Seamless Gutter Installation in Essex County, NJ | Gutama Home Improvement",
		description:
			"Trusted seamless gutter installation and gutter services in Essex County, NJ.",
		images: [imageUrl],
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#ffffff",
};

export default function SeamlessGutterLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: "Seamless Gutter Installation in Essex County, NJ",
		description:
			"Learn about seamless gutter installation benefits, costs, maintenance tips, and how professional gutters protect your Essex County, NJ home from water damage.",
		image: imageUrl,
		author: {
			"@type": "Organization",
			name: siteConfig.business.name,
		},
		publisher: {
			"@type": "Organization",
			name: siteConfig.business.name,
			logo: {
				"@type": "ImageObject",
				url: `${siteUrl}/images/logo.webp`,
			},
		},
		mainEntityOfPage: pageUrl,
	};

	const businessSchema = {
		"@context": "https://schema.org",
		"@type": "RoofingContractor",
		name: siteConfig.business.name,
		url: siteUrl,
		telephone: `+1-${siteConfig.phones.english}`,
		email: siteConfig.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: siteConfig.address.streetAddress,
			addressLocality: siteConfig.address.locality,
			addressRegion: siteConfig.address.region,
			postalCode: siteConfig.address.postalCode,
			addressCountry: siteConfig.address.country,
		},
		priceRange: "$$",
		sameAs: [
			"https://www.instagram.com/gutamahomeimprovement",
			"https://www.facebook.com/gutamaroofingnj",
		],
	};

	return (
		<>
			{children}

			<Script
				id="seamless-gutter-article-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(articleSchema),
				}}
			/>

			<Script
				id="seamless-gutter-business-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(businessSchema),
				}}
			/>
		</>
	);
}
