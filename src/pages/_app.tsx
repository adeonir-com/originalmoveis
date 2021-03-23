import Head from 'next/head'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from 'styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Original | Móveis sob medida</title>
        <link rel="shortcut" href="/assets/icon-512.png" />
        <link rel="apple-touch-icon" href="/assets/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        />
        <meta
          name="description"
          content="A Original produz e instala móveis sob medida de qualidade reconhecida, desde 1987. Consulte nos, que teremos prazer em lhe atender."
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
