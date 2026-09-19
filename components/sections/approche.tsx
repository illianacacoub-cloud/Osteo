import { ArrowUpRight, Check } from 'lucide-react'

import { bookingTrack } from '@/lib/analytics'
import { DOCTOLIB_URL, approcheCards, approcheChecks } from '@/lib/content'

export function Approche() {
  return (
    <section className="section" id="approche">
      <div className="container split">
        <div>
          <p className="eyebrow">Approche</p>
          <h2>Approche &amp; bénéfices</h2>
          <p className="method">Une méthode simple : écouter, tester, traiter, conseiller.</p>
          <p className="lede">
            Chaque séance est adaptée à votre histoire et vos besoins. Les techniques sont choisies pour être
            précises, respectueuses du corps et orientées vers une amélioration progressive.
          </p>

          <ul className="check-list">
            {approcheChecks.map((check) => (
              <li key={check}>
                <span className="check-mark"><Check size={12} strokeWidth={2.4} aria-hidden="true" /></span>
                {check}
              </li>
            ))}
          </ul>

          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button action-button-light"
            {...bookingTrack('approach')}
          >
            Réserver sur Doctolib
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </a>
        </div>

        <div className="approche-aside">
          <figure className="framed framed-tall">
            <img src="/cabinet.webp" alt="Le cabinet d'ostéopathie à Paris 3" />
          </figure>
          <ul className="benefit-list">
            {approcheCards.map(({ icon: Icon, title, detail }) => (
              <li key={title}>
                <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <span>{detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
