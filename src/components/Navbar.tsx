import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Features' },
  { href: '#advantages', label: 'Why us' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 md:pt-6">
        <nav
          className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border px-3 py-2 pl-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:px-4 ${
            scrolled
              ? 'border-white/10 bg-void/70 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl'
              : 'border-white/8 bg-white/[0.04] backdrop-blur-xl'
          }`}
          aria-label="Primary"
        >
          <a href="#top" className="group flex items-center gap-2.5 shrink-0">
            <img
              src="/logo.webp"
              alt="APTA-G Scientific"
              className="h-8 w-auto"
            />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-[13px] font-medium text-mist transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-frost"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-frost px-4 py-2 text-[13px] font-semibold text-void transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-cyan active:scale-[0.98] sm:inline-flex"
            >
              Start project
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-void/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span
                className={`absolute h-[1.5px] w-4 bg-frost transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? 'rotate-45' : '-translate-y-[4px]'
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-frost transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-4 bg-frost transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? '-rotate-45' : 'translate-y-[4px]'
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-void/90 backdrop-blur-3xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex flex-1 flex-col justify-center gap-2 px-8 pt-24">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl font-semibold tracking-tight text-frost"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex w-max items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-void"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Start project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
