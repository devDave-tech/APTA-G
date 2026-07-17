import { Reveal } from './Reveal'
import { Eyebrow, PrimaryButton, SectionShell, onSpotlightMove } from './ui'

const items = [
  {
    n: '01',
    title: 'Innovative solutions',
    body: 'Custom aptamer programs aligned to your scientific goals — accelerating discovery without one-size-fits-all kits.',
  },
  {
    n: '02',
    title: 'Expert guidance',
    body: 'Dedicated support so projects stay on track. Binding, assay, and formulation questions get resolved as they surface.',
  },
  {
    n: '03',
    title: 'Strategic collaborations',
    body: 'Partner with a team that brings selection technology and domain expertise to strengthen your R&D capability.',
  },
]

export function Advantages() {
  return (
    <SectionShell id="advantages" withLine>
      <div className="grid items-start gap-14 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5 md:sticky md:top-32">
          <Eyebrow>What we provide</Eyebrow>
          <h2 className="display mt-5 text-[clamp(2rem,4vw,3.25rem)] text-frost">
            Three advantages that move research forward
          </h2>
          <p className="mt-5 max-w-[36ch] text-base font-light leading-relaxed text-mist">
            Customer-centric by design. We select and supply DNA and peptide aptamers for
            the biotech sector — helping labs move from idea to data faster.
          </p>
          <div className="mt-9">
            <PrimaryButton href="#contact">Explore offerings</PrimaryButton>
          </div>
        </Reveal>

        <div className="md:col-span-7 space-y-4">
          {items.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.07}>
              <article
                className="bezel spotlight"
                onMouseMove={onSpotlightMove}
              >
                <div className="bezel-inner flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-10 sm:p-8">
                  <span className="font-display text-5xl font-bold tracking-tighter text-white/[0.08] sm:min-w-[4.5rem] sm:pt-1">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-frost md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm font-light leading-relaxed text-mist sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
