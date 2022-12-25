import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContextWrapper } from '../context/AppContext'; // import based on where you put it


export default function App({ Component, pageProps }: AppProps) {
  return <div className=''>
    <AppContextWrapper >
      <Component {...pageProps} />
    </AppContextWrapper>
  </div>
}
