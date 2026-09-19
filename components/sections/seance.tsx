import { seanceSteps } from '@/lib/content'

export function Seance() {
  return (
    <section className="section section-deep" id="seance">
      <div className="container">
        <div className="section-head-row" data-reveal>
          <h2>Déroulement d&apos;une séance</h2>
          <p className="section-aside">Durée moyenne : 45 minutes</p>
        </div>

        <div className="seance-media" data-reveal data-reveal-stagger>
          <figure className="framed">
            <img src="/seance1.webp" alt="Bilan et tests en début de séance" />
          </figure>
          <figure className="framed">
            <img src="/drainage.webp" alt="Technique manuelle précise pendant le traitement" />
          </figure>
        </div>

        <ol className="step-grid" data-reveal data-reveal-stagger>
          {seanceSteps.map(({ step, title, detail }) => (
            <li key={step}>
              <span className="step-number">{step}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
