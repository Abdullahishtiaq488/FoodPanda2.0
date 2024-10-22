import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)', // Custom background variable
				foreground: 'var(--foreground)', // Custom foreground variable
				primary: {
					DEFAULT: '#ec4899', // Tailwind pink-500 hex code
					light: '#FBD8ED', // pink 150
					lighter: '#FFF1F2', // Custom lighter pink (no direct equivalent in Tailwind)
					dark: '#e91e63', // Dark pink (similar to Tailwind pink-600)
					hoverdark: '#c61a4a',
				},
				secondary: {
					DEFAULT: '#718096', // Tailwind gray-600
					light: '#E2E8F0', // Tailwind gray-200
					lighter: '#F7FAFC', // Tailwind gray-100
					medium: '#D1D5DB', // gray 300
					dark: '#4A5568', // Tailwind gray-700

				},
				tertiary: {
					DEFAULT: '#718096', // Same as secondary DEFAULT (gray-600)
					light: '#FEEBEE', // Custom light pink (no direct equivalent in Tailwind)
					lighter: '#F7FAFC', // Same as secondary lighter (gray-100)
				},
				'custom-border-color': '#333',
				'hero-section-bg--color': '#f7f7f7',
				'custom-button-color': '#ed1c24',
				'font-family-custom': 'Poppins, sans-serif',
				'mobile-text-color': '#fffbf7',
				'footer-text-color': '#39434d',
				'footer-background-color': '#0f0f0f',
				'location-text-color': '#ED1C24',
				'get-green-btn': '#28a745',
				'locate-me-btn': '#e21b70',
				'image-background-color': '#f5f5f5',
			},
			borderRadius: {
				lg: 'var(--radius)', // Custom large radius variable
				md: 'calc(var(--radius) - 2px)', // Custom medium radius
				sm: 'calc(var(--radius) - 4px)', // Custom small radius
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"), // Plugin for animations
	],
};

export default config;
