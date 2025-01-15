import typography from '@tailwindcss/typography';
import tailwindcssAnimate from 'tailwindcss-animate';
import colors from './theme.config';
import typo from './typography.config';
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'], // Enables class-based dark mode
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                'desktop-xl': {
                    max: '1535px',
                },
                'laptop-xl': {
                    max: '1279px',
                },
                'tablet-lg': {
                    max: '1023px',
                },
                'mobile-lg': {
                    max: '767px',
                },
                'mobile-sm': {
                    max: '639px',
                },
            },
            aspectRatio: {
                '4/3': '4 / 3',
            },
            colors: {
                ...colors,
            },
            typography: {
                ...typo,
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [typography, tailwindcssAnimate],
};
