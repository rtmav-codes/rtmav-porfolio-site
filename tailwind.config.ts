import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				display: ['dico-code-two', 'monospace'],
				body: ['dico-code-two', 'monospace'],
			},
			keyframes: {
				twinkle: {
					'0%, 80%, 100%': { opacity: '0', transform: 'scale(0.5)' },
					'90%': { opacity: '0.8', transform: 'scale(1.2)' },
				}
			}
		}
	},

	plugins: [typography, forms, require('daisyui')],
	
	// Add daisyUI config
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter"
		]
	}
} satisfies Config;
