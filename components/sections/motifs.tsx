import { ArrowRight, Phone } from 'lucide-react'

import { bookingTrack, phoneTrack } from '@/lib/analytics'
import { DOCTOLIB_URL, PHONE_HREF, motifs } from '@/lib/content'

export function Motifs() {
  return (
    <section className="section section-alt" id="motifs">
      <div className="container">
        <p className="eyebrow">Motifs</p>
        <h2>Motifs de consultation</h2>
        <p className="lede lede-wide">
          Des douleurs ou gênes qui s&apos;installent ?<br />
          L&apos;objectif : comprendre, traiter, puis vous donner des conseils concrets pour prolonger les effets.
        </p>

        <ul className="motif-grid">
          {motifs.map(({ icon: Icon, title, items, action, actionLabel, urgent }) => (
            <li key={title} className={`motif-card ${urgent ? 'is-urgent' : ''}`}>
              <span className="motif-icon"><Icon size={18} strokeWidth={1.6} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <ul className="motif-items">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {action === 'call' ? (
                <a
                  href={PHONE_HREF}
                  className="motif-link motif-link-urgent"
                  {...phoneTrack('emergency', 'emergency')}
                >
                  <Phone size={14} strokeWidth={1.8} aria-hidden="true" /> {actionLabel}
                </a>
              ) : (
                <a
                  href={DOCTOLIB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="motif-link"
                  {...bookingTrack('motifs')}
                >
                  {actionLabel} <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
