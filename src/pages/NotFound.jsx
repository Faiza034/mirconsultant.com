import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <section className="section text-center">
      <Seo title="Page Not Found | MIR Education Consultants" description="The page you are looking for could not be found." path="/404" noindex />
      <div className="container-x max-w-xl">
        <p className="font-display text-7xl text-gold">404</p>
        <h1 className="mt-4 text-3xl">Page not found</h1>
        <p className="mt-3">The page you requested doesn’t exist or has moved.</p>
        <Link to="/" className="btn-primary mt-8">Back to Home</Link>
      </div>
    </section>
  )
}
