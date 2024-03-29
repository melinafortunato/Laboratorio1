import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import  Footer2  from "@/app/components/footer2"
import  Footer1  from "@/app/components/footer1"

import  Header  from "@/app/components/header"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
  <body className={inter.className}>
   <Header/>
    {children}
   <Footer1/>
    <Footer2/>
  </body>
</html>


  
  )}