// pages/_app.js
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import '../styles/global.css' // your global styles

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
