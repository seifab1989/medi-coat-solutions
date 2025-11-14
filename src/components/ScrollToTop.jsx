import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls the window to the top whenever the pathname changes.
// If a hash (#anchor) is present we allow the browser default behavior.
export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // If there is a hash, let the browser handle native scroll to anchor
    if (location.hash) return
    // Use requestAnimationFrame to ensure layout is ready
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
  }, [location.pathname, location.hash])

  return null
}
