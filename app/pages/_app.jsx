import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/assets/themes/Global.styles'
import { dark } from '../src/assets/themes/Dark.styles'



const App = ({ Component, pageProps }) => {
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

export default App
