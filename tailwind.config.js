/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores por escenario según especificación
        series: {
          primary: '#1E40AF',
          success: '#059669',
          error: '#DC2626',
          bg: '#334155',
        },
        power: {
          primary: '#7C3AED',
          secondary: '#06B6D4',
          accent: '#F97316',
          bg: '#0C0A09',
        },
        fourier: {
          primary: '#8B5CF6',
          secondary: '#10B981',
          accent: '#FCD34D',
        },
        complex: {
          primary: '#3B82F6',
          secondary: '#EC4899',
          accent: '#22D3EE',
          bg: '#1E293B',
        },
        integration: {
          primary: '#4F46E5',
          secondary: '#059669',
          accent: '#F59E0B',
          bg: '#0F172A',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
