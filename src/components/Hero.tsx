import { motion } from 'framer-motion'
import { Eyebrow, GhostButton, PrimaryButton } from './ui'

const metrics = [
  { label: 'Affinity', value: 'nM-scale' },
  { label: 'Targets', value: 'Custom' },
  { label: 'Formats', value: 'DNA · Peptide' },
]

const stats = [
  { label: 'Targets', value: 'Custom' },
  { label: 'Formats', value: 'DNA · Peptide' },
  { label: 'Focus', value: 'R&D · Dx · Tx' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05080F]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/imagine/hero-helix.png"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/imagine/hero-helix.mp4" type="video/mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to right, #05080F 55%, rgba(5,8,15,0) 100%), linear-gradient(to top, #05080F 10%, transparent 50%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-28 pt-28 md:px-8 md:pt-36 lg:px-10">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          <motion.div
            className="min-w-0 md:col-span-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow tone="cyan">Next-generation aptamers</Eyebrow>

            <h1 className="display mt-7 max-w-[13ch] text-[clamp(2.5rem,5.2vw,5rem)] leading-[0.98]">
              <span className="bg-gradient-to-r from-[#3DCEC4] to-[#7B74D6] bg-clip-text text-transparent">
                Precision binding
              </span>
              <span className="block text-[#E6EEF8]">
                for the next experiment.
              </span>
            </h1>

            <p className="mt-8 max-w-[50ch] text-[1.05rem] font-light leading-[1.7] text-[#E6EEF8]/70 md:text-lg">
              APTA-G Scientific designs custom DNA and peptide aptamers for
              research, diagnostics, and therapeutics — selected to your target,
              delivered with scientific rigor.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#contact">Start now</PrimaryButton>
              <GhostButton href="#products">Explore products</GhostButton>
            </div>

            <div className="mt-14 hidden border-t border-white/[0.07] pt-6 md:hidden">
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#3DCEC4]">
                      {m.label}
                    </p>
                    <p className="mt-1 font-display text-sm font-semibold tracking-tight text-[#E6EEF8]">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hidden min-w-0 md:col-span-5 md:block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="float-right w-full max-w-[220px] space-y-0 rounded-2xl border border-white/[0.1] bg-[#E6EEF8]/[0.05] p-5 backdrop-blur-[12px] lg:max-w-[240px] lg:p-6">
              {metrics.map((m, i) => (
                <div key={m.label}>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E6EEF8]/60">
                      {m.label}
                    </span>
                    <span className="font-display text-sm font-semibold tracking-tight text-[#E6EEF8]">
                      {m.value}
                    </span>
                  </div>
                  {i < metrics.length - 1 && (
                    <div className="h-px bg-white/[0.06]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.05] bg-[#05080F]/80 px-5 py-4 backdrop-blur-[8px] md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-around gap-4 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#3DCEC4]">
                {s.label}
              </p>
              <p className="mt-0.5 font-display text-sm font-semibold tracking-tight text-[#E6EEF8]">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
