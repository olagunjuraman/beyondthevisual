import { NextPage } from "next"
import type { AppProps } from "next/app"
import App from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import { ReactElement, ReactNode } from "react"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function XApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Test Website</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

XApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default XApp
