/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fill-260': 'repeat(auto-fill, minmax(260px, 1fr))',
				'auto-fit-260': 'repeat(auto-fit, minmax(260px, 1fr))'
			},
			gridAutoColumns: {
				'260': 'minmax(260px, 1fr)'
			}
		}
	},
	plugins: []
};
