import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/assets/themes/Global.styles'
import { dark } from '../src/assets/themes/Dark.styles'
import { light } from '../src/assets/themes/Light.styles'
import { parseCookies } from 'nookies'

const App = ({ Component, pageProps }) => {
  
  const [theme, setTheme] = useState(dark)
  const {'scode.theme':cookie_theme} = parseCookies()

  const ChangeTheme = (Title) => Title === 'light' ? setTheme(dark):setTheme(light)


  useEffect(() => {
    !!cookie_theme && cookie_theme === 'light' ? ChangeTheme('dark'):ChangeTheme('light')
    
  },[])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} ChangeTheme={ChangeTheme}/>
      </ThemeProvider>
    </>
  )
}

export default App
