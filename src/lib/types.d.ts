import type { SvelteComponent, ComponentProps, SvelteComponentTyped } from 'svelte';

type relatedLink = {
	value: string;
};

export interface CardData {
	altText?: string;
	caption?: string;
	eyebrow?: string;
	footnote?: string;
	headline?: string;
	href?: string;
	srcURL?: string;
	subHead?: string;
	text?: string;
	relatedLinksHeadline?: string;
	relatedLinks: relatedLink[];
}

export interface ArticleData {
	twitterHandle: string;
	title: string;
	description: string;
	headline: string;
	stand: string;
	author: string;
	photographer: string;
	articleURL: string;
	immersiveURL: string;
	doi: string;
	pdfAvailable: boolean;
	altPdfAvailable: boolean;
	altPdfBlurb: string;
	publishedAt: number;
	publishedAtString: string;
	menuLinks: { text: string; href: string }[];
}

export interface ImageData {
	srcURL: string;
	altText: string;
	caption: string;
}

export interface ScrollytellingStep {
	text: string;
	data: {
		url: string;
		altText: string;
	};
}

// From https://stackoverflow.com/questions/72531742/how-to-use-sveltecomponent-with-typescript
type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;

export interface StaticImageStep {
	stepComponent: C;
	stepContent: ComponentProps<stepComponent>;
	altText: string;
	caption: string;
	srcURL: string;
}

export interface VideoData {
	videoId: string;
	title: string;
	info: string;
	authors: string;
	institution: string;
}

export interface VideoCaptionTrack {
	label: string;
	srclang: string;
	defaultTrack: boolean;
}

declare global {
	interface Window {
		onYouTubeIframeAPIReady: () => void;
	}
}
