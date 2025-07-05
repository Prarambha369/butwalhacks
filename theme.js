// theme.js
export default {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#000',
    background: '#121212', // slightly darker than pure white
    primary: '#ec3750',
    secondary: '#ff8c37',
    modes: {
      dark: {
        text: '#ffffff',
        background: '#f2f2f5', // darker background for dark mode
      },
    },
  },
}
