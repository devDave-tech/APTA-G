import { Reveal } from './Reveal'
import { Eyebrow, SectionShell, onSpotlightMove } from './ui'

const features = [
  {
    title: 'High specificity & affinity',
    body: 'Engineered to bind precisely to their targets — accurate detection and reliable performance across research and diagnostic applications.',
    meta: 'Binding',
    span: 'md:col-span-8',
    tall: true,
  },
  {
    title: 'Stability & flexibility',
    body: 'DNA aptamers resist temperature swings, store cleanly, and accept chemical modifications for sensors, labels, and conjugates.',
    meta: 'Chemistry',
    span: 'md:col-span-4',
    tall: false,
  },
  {
    title: 'Cost-effective & scalable',
    body: 'Selected and synthesized quickly and reproducibly — lower cost than many biologics, with batch-to-batch consistency that scales.',
    meta: 'Production',
    span: 'md:col-span-5',
    tall: false,
  },
  {
    title: 'Built for real workflows',
    body: 'From discovery screens to diagnostic prototypes, selection conditions align with the matrix and readout you actually use in the lab.',
    meta: 'Process',
    span: 'md:col-span-7',
    tall: false,
  },
]

export function Features() {
  return (
    <SectionShell id="features" withLine>
      <div
        className="pointer-events-none absolute right-0 top-1/2 aspect-square w-[clamp(200px,30vw,400px)] -translate-y-1/2 opacity-[0.06]"
        aria-hidden
      >
        <img
          src="/imagine/feature-bind.png"
          alt=""
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <Reveal>
        <Eyebrow tone="violet">Features</Eyebrow>
        <h2 className="display mt-5 max-w-[16ch] text-[clamp(2rem,4vw,3.35rem)] text-frost">
          Why aptamers outperform traditional binders
        </h2>
        <p className="mt-5 max-w-[48ch] text-base font-light leading-relaxed text-mist">
          Built around what scientists measure: specificity, stability, and the ability to
          scale without biological variability.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-4 md:grid-cols-12 md:gap-5">
        {features.map((f, i) => (
          <Reveal key={f.title} className={f.span} delay={i * 0.05}>
            <article
              className="bezel spotlight h-full"
              onMouseMove={onSpotlightMove}
            >
              <div
                className={`bezel-inner relative flex h-full flex-col overflow-hidden p-6 md:p-8 ${
                  f.tall ? 'min-h-[260px] md:min-h-[300px]' : 'min-h-[200px]'
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl ${
                    i % 2 === 0 ? 'bg-cyan/12' : 'bg-violet/12'
                  }`}
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/80">
                  {f.meta}
                </p>
                <h3
                  className={`relative mt-5 font-display font-semibold tracking-tight text-frost ${
                    f.tall ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                  }`}
                >
                  {f.title}
                </h3>
                <p className="relative mt-3 max-w-md flex-1 text-sm font-light leading-relaxed text-mist md:text-[0.95rem]">
                  {f.body}
                </p>
                <div className="relative mt-8 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
