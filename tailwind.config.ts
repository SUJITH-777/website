import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

/** Semantic colours: #hex in theme.css; Tailwind uses rgb(from var(…) …) for opacity. */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
				serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
				display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
			},
			maxWidth: {
				brand: '1080px',
			},
			colors: {
				border: 'rgb(from var(--border) r g b / <alpha-value>)',
				input: 'rgb(from var(--input) r g b / <alpha-value>)',
				ring: 'rgb(from var(--ring) r g b / <alpha-value>)',
				background: 'rgb(from var(--background) r g b / <alpha-value>)',
				foreground: 'rgb(from var(--foreground) r g b / <alpha-value>)',
				primary: {
					DEFAULT: 'rgb(from var(--primary) r g b / <alpha-value>)',
					foreground: 'rgb(from var(--primary-foreground) r g b / <alpha-value>)',
					soft: 'rgb(from var(--primary-soft) r g b / <alpha-value>)',
				},
				secondary: {
					DEFAULT: 'rgb(from var(--secondary) r g b / <alpha-value>)',
					foreground: 'rgb(from var(--secondary-foreground) r g b / <alpha-value>)',
				},
				destructive: {
					DEFAULT: 'rgb(from var(--destructive) r g b / <alpha-value>)',
					foreground: 'rgb(from var(--destructive-foreground) r g b / <alpha-value>)',
				},
				muted: {
					DEFAULT: 'rgb(from var(--muted) r g b / <alpha-value>)',
					foreground: 'rgb(from var(--muted-foreground) r g b / <alpha-value>)',
				},
				accent: {
					DEFAULT: 'rgb(from var(--accent) r g b / <alpha-value>)',
					foreground: 'rgb(from var(--accent-foreground) r g b / <alpha-value>)',
				},
				popover: {
					DEFAULT: 'rgb(from var(--popover) r g b / <alpha-value>)',
					foreground: 'rgb(from var(--popover-foreground) r g b / <alpha-value>)',
				},
				card: {
					DEFAULT: 'rgb(from var(--card) r g b / <alpha-value>)',
					foreground: 'rgb(from var(--card-foreground) r g b / <alpha-value>)',
				},
				trust: {
					DEFAULT: 'rgb(from var(--trust) r g b / <alpha-value>)',
					foreground: 'rgb(from var(--trust-foreground) r g b / <alpha-value>)',
				},
				care: {
					DEFAULT: 'rgb(from var(--care) r g b / <alpha-value>)',
					foreground: 'rgb(from var(--care-foreground) r g b / <alpha-value>)',
				},
				sidebar: {
					DEFAULT: 'rgb(from var(--sidebar-background) r g b / <alpha-value>)',
					foreground: 'rgb(from var(--sidebar-foreground) r g b / <alpha-value>)',
					primary: 'rgb(from var(--sidebar-primary) r g b / <alpha-value>)',
					'primary-foreground': 'rgb(from var(--sidebar-primary-foreground) r g b / <alpha-value>)',
					accent: 'rgb(from var(--sidebar-accent) r g b / <alpha-value>)',
					'accent-foreground': 'rgb(from var(--sidebar-accent-foreground) r g b / <alpha-value>)',
					border: 'rgb(from var(--sidebar-border) r g b / <alpha-value>)',
					ring: 'rgb(from var(--sidebar-ring) r g b / <alpha-value>)',
				},
				teal: {
					primary:      'var(--hex-teal-primary)',
					primaryDark:  'var(--hex-teal-primary-dark)',
					primaryLight: 'var(--hex-teal-primary-light)',
					primarySoft:  'var(--hex-teal-primary-soft)',
					primaryFaint: 'var(--hex-teal-primary-faint)',
				},
				aayu: {
					background:    'var(--hex-aayu-background)',
					backgroundMid: 'var(--hex-aayu-background-mid)',
					card:          'var(--hex-aayu-card)',
					border:        'var(--hex-aayu-border)',
					disabled:      'var(--hex-aayu-disabled)',
					textPrimary:   'var(--hex-aayu-text-primary)',
					textBody:      'var(--hex-aayu-text-body)',
					textMuted:     'var(--hex-aayu-text-muted)',
					textPlaceholder: 'var(--hex-aayu-text-placeholder)',
					accentWarm:    'var(--hex-aayu-accent-warm)',
					accentFaint:   'var(--hex-aayu-accent-faint)',
					success:       'var(--hex-aayu-success)',
					error:         'var(--hex-aayu-error)',
					stop:          'var(--hex-aayu-stop)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-care': 'var(--gradient-care)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'card': 'var(--shadow-card)',
				'hero': 'var(--shadow-hero)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'gentle-bounce': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-4px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'gentle-bounce': 'gentle-bounce 3s ease-in-out infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
