import {FC, ReactNode} from 'react'
import Head from 'next/head'
import { title } from 'process'

interface Props {
  title?: string
  children?: ReactNode
}

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon App"}</title>
        <meta name="author" content="Heri Espinosa"/>
        <meta name="description" content={`Informacion del pokemon ${title}`}/>
        <meta name="keywords" content={`${title}, (otras keys), (otras keys)`}/>
      </Head>
      {/* Navbar */}

      <main>
        {children}



      </main>
    </>
  )
}
