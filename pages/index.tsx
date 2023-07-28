import Head from 'next/head'
import { Inter } from 'next/font/google'
import {Button} from '@nextui-org/react'
import { Layout } from '@/components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout title='Listado de Pokemon'>
        <Button color="gradient">
            Hello world
          </Button>
      </Layout>
        
    </>
  )
}

Layout
