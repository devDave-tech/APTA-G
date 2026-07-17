import type { ReactNode, MouseEvent } from 'react'

/** Cursor-tracking spotlight on bezel cards */
export function onSpotlightMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export function Eyebrow({
  children,
  tone = 'cyan',
}: {
  children: ReactNode
  tone?: 'cyan' | 'violet' | 'mist'
}) {
  const color =
    tone === 'violet' ? 'text-violet border-violet/20 bg-violet/5' :
    tone === 'mist' ? 'text-mist border-white/10 bg-white/[0.03]' :
    'text-cyan border-cyan/20 bg-cyan/5'

  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.22em] ${color}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === 'violet' ? 'bg-violet shadow-[0_0_8px_var(--color-violet)]' :
          tone === 'mist' ? 'bg-mist' :
          'bg-cyan shadow-[0_0_8px_var(--color-cyan)]'
        }`}
      />
      {children}
    </p>
  )
}

export function PrimaryButton({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-full bg-cyan px-6 py-3.5 text-sm font-semibold text-void transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-frost active:scale-[0.98] ${className}`}
    >
      {children}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-void/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path
            d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  )
}

export function GhostButton({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-frost transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-cyan/30 hover:bg-white/[0.06] active:scale-[0.98] ${className}`}
    >
      {children}
    </a>
  )
}

export function SectionShell({
  id,
  children,
  className = '',
  withLine = false,
}: {
  id?: string
  children: ReactNode
  className?: string
  withLine?: boolean
}) {
  return (
    <section id={id} className={`relative py-28 md:py-40 ${className}`}>
      {withLine && <div className="section-line absolute inset-x-0 top-0" />}
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">{children}</div>
    </section>
  )
}
