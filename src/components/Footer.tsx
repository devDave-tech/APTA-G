export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pb-12 pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <img
                src="/logo.webp"
                alt="APTA-G Scientific"
                className="h-9 w-auto"
              />
            </a>
            <p className="mt-5 text-sm font-light leading-relaxed text-mist">
              Custom DNA and peptide aptamers for research, diagnostics, and therapeutics.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 sm:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/80">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-frost/90">
                {[
                  ['#products', 'Products'],
                  ['#features', 'Features'],
                  ['#advantages', 'Why us'],
                  ['#faq', 'FAQ'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="transition-colors duration-500 hover:text-cyan"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/80">
                Company
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-frost/90">
                <li>
                  <a href="#contact" className="transition-colors duration-500 hover:text-cyan">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@apta-g-scientific.odoo.com"
                    className="transition-colors duration-500 hover:text-cyan"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/80">
                Reach
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-frost/90">
                <li>Oakdale, Bellville</li>
                <li>
                  <a
                    href="tel:+27748255798"
                    className="transition-colors duration-500 hover:text-cyan"
                  >
                    +27 748-255-798
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-mist/60">
            © {new Date().getFullYear()} APTA-G Scientific. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-mist/45">
            Precision binding · Future science
          </p>
        </div>
      </div>
    </footer>
  )
}
