export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0F0F10',
        glass: 'rgba(255,255,255,0.08)',
        primary: '#4DA6FF',
        purple: '#7C4DFF',
        gold: '#FFD54F',
        success: '#00E676',
        text: '#FFFFFF',
        secondary: '#BDBDBD',
      },
      boxShadow: {
        glow: '0 0 80px rgba(77, 166, 255, 0.18)',
        panel: '0 20px 80px rgba(0, 0, 0, 0.18)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(77, 166, 255, 0.22), transparent 28%), radial-gradient(circle at bottom right, rgba(124, 77, 255, 0.18), transparent 24%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.85' },
          '50%': { transform: 'scale(1.02)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
