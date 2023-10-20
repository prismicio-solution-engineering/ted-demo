import '../styles/globals.css'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

function MyApp({ Component, pageProps }) {
  return(
  <>
    <Component {...pageProps} />
    <PrismicPreview repositoryName={repositoryName} />
  </>
  )
}

export default MyApp