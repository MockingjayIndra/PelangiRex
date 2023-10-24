import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Product from '@/components/product'
import Gallery from '@/components/gallery'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Product></Product>
      <Gallery></Gallery>
      <Contact></Contact>
    </main>
  )
}
