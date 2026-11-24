import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Destinations = lazy(() => import('./pages/Destinations'))
const DestinationDetails = lazy(() => import('./pages/DestinationDetails'))
const Services = lazy(() => import('./pages/Services'))
const Universities = lazy(() => import('./pages/Universities'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-primary">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="min-h-[60vh]">
        <Suspense fallback={<div className="py-32 text-center text-sm">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
