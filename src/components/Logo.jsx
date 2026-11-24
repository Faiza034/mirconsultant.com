import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

// Uses /public/logo.png. Replace the file to update the logo everywhere.
export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
      <span className={`rounded-lg ${light ? 'bg-ivory p-1.5' : ''}`}>
        <img src="/logo.png" alt="MIR Consultants logo" className="h-10 w-auto sm:h-12" width="96" height="50" />
      </span>
      <span className={`hidden max-w-[11rem] font-display text-sm font-semibold leading-tight sm:block ${light ? 'text-white' : 'text-primary'}`}>
        {SITE.name}
      </span>
    </Link>
  )
}
