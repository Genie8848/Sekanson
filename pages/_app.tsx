import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContextWrapper } from '../context/AppContext'; // import based on where you put it
import { MetamaskProvider } from '../hooks/useMetamask';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextWrapper >
      <MetamaskProvider>
        <Component {...pageProps} />
      </MetamaskProvider>
    </AppContextWrapper>
  )
}
