import { Reveal } from './Reveal'
import { Eyebrow, GhostButton, PrimaryButton, SectionShell, onSpotlightMove } from './ui'

const lead = {
  tag: '01',
  title: 'DNA Aptamers',
  body: 'Chemically stable oligonucleotide binders selected for high specificity. Ideal for assays, sensors, and diagnostic platforms that demand batch-consistent performance.',
  points: ['Thermal resilience', 'Easy chemical modification', 'Batch-consistent synthesis'],
}

const side = [
  {
    tag: '02',
    title: 'Peptide Aptamers',
    body: 'Short peptide scaffolds that recognize protein targets with antibody-like affinity — without the overhead of full biologics.',
    points: ['Protein interfaces', 'Therapeutic exploration', 'Compact scaffolds'],
  },
  {
    tag: '03',
    title: 'Custom Selection',
    body: 'Customer-centric programs tailored to your target, buffer, matrix, and application — from early R&D through translational work.',
    points: ['Target-defined panels', 'Application-matched specs', 'Ongoing support'],
  },
]

export function Products() {
  return (
    <SectionShell id="products">
      <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-8">
        <Reveal className="md:col-span-7">
          <Eyebrow>Products</Eyebrow>
          <h2 className="display mt-5 text-[clamp(2rem,4.2vw,3.5rem)] text-frost">
            Targeted binders for
            <span className="text-mist"> the work that matters.</span>
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5" delay={0.08}>
          <p className="max-w-[36ch] text-base font-light leading-relaxed text-mist md:ml-auto md:text-right">
            DNA and peptide aptamers engineered for quality and precision across research,
            diagnostics, and therapeutic discovery.
          </p>
        </Reveal>
      </div>

      {/* Asymmetric bento — not 3 equal cards */}
      <div className="mt-16 grid gap-4 md:grid-cols-12 md:gap-5">
        <Reveal className="md:col-span-7 md:row-span-2" delay={0.05}>
          <article
            className="bezel spotlight h-full group"
            onMouseMove={onSpotlightMove}
          >
            <div className="bezel-inner relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden p-7 md:min-h-[420px] md:p-10">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                poster="/imagine/dna-aptamer.png"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-700 ease-out group-hover:opacity-20"
              >
                <source src="/imagine/dna-aptamer.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel via-panel/60 to-panel/40" />
              <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-cyan/80">{lead.tag}</span>
                  <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-cyan/40 to-transparent" />
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold tracking-tight text-frost md:text-4xl">
                  {lead.title}
                </h3>
                <p className="mt-4 max-w-md text-base font-light leading-relaxed text-mist">
                  {lead.body}
                </p>
                <ul className="mt-10 flex flex-wrap gap-2">
                  {lead.points.map((pt) => (
                    <li
                      key={pt}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-frost/90"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        {side.map((p, i) => (
          <Reveal key={p.tag} className="md:col-span-5" delay={0.1 + i * 0.06}>
            <article
              className="bezel spotlight h-full group"
              onMouseMove={onSpotlightMove}
            >
              <div className="bezel-inner relative flex h-full flex-col overflow-hidden p-6 md:p-7">
                {p.tag === '02' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    poster="/imagine/peptide-aptamer.png"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-700 ease-out group-hover:opacity-20"
                  >
                    <source src="/imagine/peptide-aptamer.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    poster="/imagine/custom-selection.png"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-700 ease-out group-hover:opacity-20"
                  >
                    <source src="/imagine/custom-selection.mp4" type="video/mp4" />
                  </video>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel via-panel/60 to-panel/40" />
                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-violet/90">{p.tag}</span>
                    <span className="h-px flex-1 max-w-12 bg-gradient-to-r from-violet/35 to-transparent" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-frost md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-mist">
                    {p.body}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-white/[0.07] pt-4">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-[13px] text-frost/90">
                        <span className="h-1 w-1 rounded-full bg-cyan" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex flex-wrap gap-3" delay={0.12}>
        <PrimaryButton href="#contact">Request catalog</PrimaryButton>
        <GhostButton href="#contact">Contact sales</GhostButton>
      </Reveal>
    </SectionShell>
  )
}
