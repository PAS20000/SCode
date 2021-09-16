import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../components/assets/themes/Global.styles'
import { dark } from '../components/assets/themes/Dark.styles'



export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
