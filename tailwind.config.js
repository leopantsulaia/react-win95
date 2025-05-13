/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Kept for potential future use, though Win95 is light
    content: [
        "./src/pages/**/*.{js,jsx}",
        "./src/components/**/*.{js,jsx}",
        "./src/app/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                'win95-border-light': 'hsl(var(--win95-border-light))',
                'win95-border-dark': 'hsl(var(--win95-border-dark))',
                'win95-border-deep-dark': 'hsl(var(--win95-border-deep-dark))',
                'win95-silver': 'hsl(var(--win95-silver))',
                'win95-teal-desktop': 'hsl(var(--win95-teal-desktop))',
                'win95-navy-title': 'hsl(var(--win95-navy-title))',
            },
            fontFamily: {
                sans: ['VT323', 'monospace'], // Overriding sans for pixel look
                vt323: ['VT323', 'monospace'],
            },
            borderRadius: {
                DEFAULT: '0rem', // Win95 style
                lg: '0rem',
                md: '0rem',
                sm: '0rem',
            },
            boxShadow: {
              'win95-button': '1px 1px 0px 0px hsl(var(--win95-border-deep-dark)), inset 1px 1px 0px 0px hsl(var(--win95-border-light))',
              'win95-button-active': '1px 1px 0px 0px hsl(var(--win95-border-deep-dark)), inset 0px 0px 0px 1px hsl(var(--win95-border-dark))',
            },
            keyframes: {}, // Remove default animations
            animation: {},   // Remove default animations
        },
    },
    plugins: [], // Remove tailwindcss-animate
};
