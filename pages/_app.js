import '../styles/globals.css'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {router.asPath !== "/slice-simulator" ?
        <>
          <Component {...pageProps} />
          <PrismicPreview repositoryName={repositoryName} />
        </>
        :
        <Component {...pageProps} />
      }
    </>
  )
}

export default MyApp