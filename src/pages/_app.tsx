import '../assets/styles/globals.css'
import '../../node_modules/antd/dist/antd.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
