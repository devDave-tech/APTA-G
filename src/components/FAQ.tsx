import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { Eyebrow, SectionShell } from './ui'

const faqs = [
  {
    q: 'What products does your company offer?',
    a: 'We focus on the selection and supply of DNA and peptide aptamers — specialized services for biotech R&D, diagnostics development, and therapeutic exploration.',
  },
  {
    q: 'How can I reach customer support?',
    a: 'Email info@apta-g-scientific.odoo.com, call +27 748-255-798, or use the contact form on this site. Our team assists with product questions, selection programs, and project scoping.',
  },
  {
    q: 'What is your satisfaction policy?',
    a: 'We offer a 30-day satisfaction guarantee. Items should be in original condition and unused, with proof of purchase. Refunds are typically processed within 5–7 business days of receiving a returned item.',
  },
  {
    q: 'Can you select aptamers against my custom target?',
    a: 'Yes. Customer-centric selection is core to APTA-G. Share your target, preferred format (DNA or peptide), and application context — we design a selection path aligned to your goals.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <SectionShell id="faq" withLine>
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-4">
          <Eyebrow tone="violet">FAQ</Eyebrow>
          <h2 className="display mt-5 text-[clamp(2rem,3.8vw,3rem)] text-frost">
            Top inquiries, answered
          </h2>
          <p className="mt-4 max-w-[32ch] text-sm font-light leading-relaxed text-mist md:text-base">
            Clear answers for scientists evaluating aptamers — and for teams ready to
            start a selection program.
          </p>
        </Reveal>

        {/* Side-by-side progressive list (not generic full-width accordion stack only) */}
        <div className="md:col-span-8">
          <div className="bezel">
            <div className="bezel-inner divide-y divide-white/[0.06] overflow-hidden">
              {faqs.map((item, i) => {
                const isOpen = open === i
                return (
                  <Reveal key={item.q} delay={i * 0.04}>
                    <div>
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-6 px-5 py-5 text-left transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.02] md:px-7 md:py-6"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(i)}
                      >
                        <span className="flex gap-4">
                          <span className="mt-1 font-mono text-[11px] text-mist/60">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="font-display text-base font-semibold tracking-tight text-frost md:text-lg">
                            {item.q}
                          </span>
                        </span>
                        <span
                          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cyan transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                          aria-hidden
                        >
                          +
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                          >
                            <p className="px-5 pb-6 pl-[3.25rem] text-sm font-light leading-relaxed text-mist md:px-7 md:pl-[4.25rem] md:pb-7 md:text-[0.95rem]">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
