/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			NotoTC: ['Noto Sans TC', 'sans-serif'],
			Maruko: ['MarukoGothicCjkTc', 'Noto Sans TC', 'sans-serif']
		},
		extend: {
			width: {
				84: '21rem',
				88: '22rem'
			},
			fontSize: {
				'4.5xl': '2.5rem',
				'2.5xl': '1.625rem',
				xs: '0.8rem',
				'2xs': '0.75rem',
				'3xs': '0.7rem',
				'4xs': '0.625rem'
			},
			letterSpacing: {
				2: '0.2em',
				2.5: '0.25em',
				4: '0.4em'
			},
			borderWidth: {
				1.5: '1.5px'
			},
			keyframes: {
				fadeHomeImgForEggFarm: {
					'0%': {
						backgroundImage:
							'url("https://img.freepik.com/free-photo/yellow-fragile-ingredient-yolk-light_1417-310.jpg")'
					},
					'25%': {
						backgroundImage: 'url("https://images.unsplash.com/photo-1623428454609-8ed6a4628b66")'
					},
					'50%': {
						backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1700004504149-e735fc17598f")'
					},
					'75%': {
						backgroundImage: 'url("https://images.unsplash.com/photo-1563822248828-fd50acca9ad0")'
					},
					'100%': {
						backgroundImage:
							'url("https://img.freepik.com/free-photo/yellow-fragile-ingredient-yolk-light_1417-310.jpg")'
					}
				}
			}
		}
	},
	plugins: []
}
