import { useEffect, useRef, useState } from 'react'

/**
 * Lightweight hook: returns a ref + boolean (true when element enters viewport).
 * Used for section fade-in animations.
 */
export default function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el) // fire once
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
