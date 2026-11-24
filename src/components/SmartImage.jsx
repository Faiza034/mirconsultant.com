import { useState } from 'react'

// Lazy-loaded image with a branded fallback if the file is missing or fails to load.
export default function SmartImage({ src, alt, label, className = '', eager = false, quiet = false }) {
  const [failed, setFailed] = useState(!src)
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-gradient-to-br from-primary to-olive text-center ${className}`}>
        {!quiet && <span className="border-y border-gold px-4 py-2 font-display text-lg text-white">{label || alt}</span>}
      </div>
    )
  }
  return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}
