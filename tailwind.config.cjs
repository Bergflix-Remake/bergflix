/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Append the path for the Skeleton NPM package and files:
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "ffd9e0",
					100: '#ffccd6',
					200: '#ffc0cb',
					300: '#ff9aac',
					400: '#ff4e6e',
					500: '#ff0230',
					600: '#e6022b',
					700: '#bf0224',
					800: '#99011d',
					900: '#7d0118'
				},
				'clean-white': '#FFFFFF',
				'darkest-dark': '#000000',
				'clean-dark': {
					50: "dbdbdb",
					100: '#cfcfcf',
					200: '#c4c4c4',
					300: '#a0a0a0',
					400: '#585858',
					500: '#111111',
					600: '#0f0f0f',
					700: '#0d0d0d',
					800: '#0a0a0a',
					900: '#080808'
				},
				delorean: {
					100: '#e1e1e1',
					200: '#c4c4c4',
					300: '#a6a6a6',
					400: '#898989',
					500: '#6b6b6b',
					600: '#565656',
					700: '#404040',
					800: '#2b2b2b',
					900: '#151515'
				},
				// 'concrete': '#989898',
				concrete: {
					100: '#eaeaea',
					200: '#d6d6d6',
					300: '#c1c1c1',
					400: '#adadad',
					500: '#989898',
					600: '#7a7a7a',
					700: '#5b5b5b',
					800: '#3d3d3d',
					900: '#1e1e1e'
				},
				gray: colors.neutral
			},
			fontFamily: {
				sans: ['Plus Jakarta Sans'],
				inception: ['Inception'],
				upheaval: ['Upheaval Pro']
			},
			transitionProperty: {
				border:
					'border-width, border-bottom-width, border-left-width, border-right-width, border-top-width'
			}
		}
	},
	plugins: [
		// 3. Append the Skeleton plugin to the end of this list
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};
