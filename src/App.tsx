import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { Features } from './components/Features'
import { Advantages } from './components/Advantages'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="grain" aria-hidden />
      <Navbar />
      <main id="main">
        <Hero />
        <Products />
        <Features />
        <Advantages />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
