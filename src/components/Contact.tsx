import { useState, type FormEvent } from 'react'
import { Reveal } from './Reveal'
import { Eyebrow, SectionShell } from './ui'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const company = String(data.get('company') || '')
    const subject = String(data.get('subject') || '')
    const message = String(data.get('message') || '')
    const phone = String(data.get('phone') || '')

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      company ? `Company: ${company}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:info@apta-g-scientific.odoo.com?subject=${encodeURIComponent(
      subject || 'Inquiry from APTA-G website',
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <SectionShell id="contact">
      <div className="bezel">
        <div className="bezel-inner relative overflow-hidden">
          <div className="mesh opacity-70" aria-hidden />
          <div className="relative grid gap-12 p-6 md:grid-cols-12 md:gap-12 md:p-10 lg:p-14">
            <Reveal className="md:col-span-5">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="display mt-5 text-[clamp(2rem,3.8vw,3rem)] text-frost">
                Start your aptamer program
              </h2>
              <p className="mt-4 max-w-[36ch] text-base font-light leading-relaxed text-mist">
                Tell us about your target and application. We respond as soon as possible —
                usually within one business day.
              </p>

              <ul className="mt-12 space-y-6">
                {[
                  { k: 'Location', v: 'Oakdale, Bellville, South Africa' },
                  { k: 'Phone', v: '+27 748-255-798', href: 'tel:+27748255798' },
                  {
                    k: 'Email',
                    v: 'info@apta-g-scientific.odoo.com',
                    href: 'mailto:info@apta-g-scientific.odoo.com',
                  },
                ].map((row) => (
                  <li key={row.k}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/80">
                      {row.k}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="mt-1.5 block break-all text-frost transition-colors duration-500 hover:text-cyan"
                      >
                        {row.v}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-frost">{row.v}</p>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="md:col-span-7" delay={0.08}>
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
                <Field label="Company" name="company" autoComplete="organization" />
                <div className="sm:col-span-2">
                  <Field label="Subject" name="subject" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="block">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                      Message *
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="field mt-2 resize-y"
                      placeholder="Target type, application, timeline…"
                    />
                  </label>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-2 sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-void transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-frost active:scale-[0.98]"
                  >
                    Send inquiry
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-void/15 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      ↗
                    </span>
                  </button>
                  {sent && (
                    <p className="text-sm text-cyan">Opening your email client…</p>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
        {label}
        {required ? ' *' : ''}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field mt-2"
      />
    </label>
  )
}
