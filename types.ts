export interface TranslationResult {
	original: string;
	translation: string;
	emoji: string;
	funFact: string;
	pronunciation: string;
}

export enum Language {
	ENGLISH = "English",
	FRENCH = "French",
}

export interface NavItem {
	label: string;
	href: string;
}
