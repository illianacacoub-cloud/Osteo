import { ArrowUpRight, Phone, ShieldCheck } from 'lucide-react'

import { bookingTrack, phoneTrack } from '@/lib/analytics'
import { ADDRESS, ADDRESS_LINES, DOCTOLIB_URL, MAPS_EMBED, MAPS_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/content'

const facts = [
  { label: 'Adresse', value: ADDRESS_LINES },
  { label: 'Tarif', value: '80€' },
  { label: 'Durée', value: '45 min' },
  { label: 'Mutuelles', value: 'Remboursement possible\nselon contrat' },
]

export function Infos() {
  return (
    <section className="section section-light" id="infos">
      <div className="container">
        <p className="eyebrow">Infos</p>
        <h2>Infos pratiques</h2>

        <div className="infos-layout" data-reveal data-reveal-stagger>
          <div className="infos-card">
            <dl className="fact-grid">
              {facts.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mutuelle-note">
              <ShieldCheck size={14} strokeWidth={1.8} aria-hidden="true" />
              Mutuelle : remboursement ostéopathie ?
            </p>

            <div className="infos-actions">
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button action-button-light"
                {...bookingTrack('infos')}
              >
                Réserver (Doctolib)
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
              </a>
              <a
                href={PHONE_HREF}
                className="action-button action-button-outline"
                {...phoneTrack('infos')}
              >
                <Phone size={15} strokeWidth={1.8} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="map-card">
            <iframe
              src={MAPS_EMBED}
              title={`Localisation du cabinet — ${ADDRESS}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="map-link">
              Ouvrir dans Maps <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
