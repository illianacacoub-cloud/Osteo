import { ArrowUpRight } from 'lucide-react'

import { bookingTrack } from '@/lib/analytics'
import { DOCTOLIB_URL, bio, credentials } from '@/lib/content'

export function Osteopathe() {
  return (
    <section className="section section-light" id="osteopathe">
      <div className="container split" data-reveal>
        <div>
          <p className="eyebrow">Votre Ostéopathe</p>
          <h2>Illiana Cacoub</h2>
          <p className="lede">{bio}</p>

          <ul className="credential-grid" data-reveal data-reveal-stagger>
            {credentials.map(({ icon: Icon, label, title, detail }) => (
              <li key={label}>
                <span className="credential-icon"><Icon size={17} strokeWidth={1.6} aria-hidden="true" /></span>
                <span className="credential-label">{label}</span>
                <strong>{title}</strong>
                <span className="credential-detail">{detail}</span>
              </li>
            ))}
          </ul>

          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button action-button-light"
            {...bookingTrack('profile')}
          >
            Prendre rendez-vous avec Illiana
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </a>
        </div>

        <figure className="portrait">
          <img src="/illiana.webp" alt="Illiana Cacoub, ostéopathe D.O. à Paris 3" />
        </figure>
      </div>
    </section>
  )
}
