/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			Montserrat: ['Montserrat', 'sans-serif'],
			EBGaramond: ['EB Garamond', 'serif'],
			NotoSansTC: ['Noto Sans TC', 'sans-serif'],
			NotoSerifTC: ['Noto Serif TC', 'serif']
		},
		extend: {
			width: {
				84: '21rem',
				88: '22rem'
			},
			fontSize: {
				'3xl': '2rem',
				'4.5xl': '2.5rem',
				'2.5xl': '1.625rem'
			},
			lineHeight: {
				12: '2.8125rem'
			},
			letterSpacing: {
				2: '0.2em',
				2.5: '0.25em',
				4: '0.4em'
			},
			borderWidth: {
				1.5: '1.5px'
			}
		}
	},
	plugins: []
}
