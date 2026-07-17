import { Reveal } from './Reveal'
import { SectionShell } from './ui'

export function CTA() {
  return (
    <SectionShell className="!py-16 md:!py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-panel-elevated via-panel to-void px-8 py-14 md:px-14 md:py-16">
          <img
            src="/imagine/lab-night.png"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.07]"
            aria-hidden
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan/12 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-violet/15 blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                Careers
              </p>
              <h2 className="display mt-3 text-[clamp(1.85rem,3.5vw,2.85rem)] text-frost">
                Looking for a career in biotechnology?
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-mist">
                Join the team building the next generation of aptamer solutions.
              </p>
            </div>
            <a
              href="mailto:info@apta-g-scientific.odoo.com?subject=Career%20inquiry"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-frost px-6 py-3.5 text-sm font-semibold text-void transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-cyan active:scale-[0.98]"
            >
              Discover more
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-void/10 transition-transform duration-500 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  )
}
