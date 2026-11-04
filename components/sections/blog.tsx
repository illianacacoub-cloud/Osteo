import { ArrowUpRight, BookOpen, MapPin } from 'lucide-react'

const articleSections = [
  {
    title: "Qu’est-ce que l’ostéopathie ?",
    paragraphs: [
      "L’ostéopathie est une approche de soin manuelle qui s’intéresse notamment à la mobilité des différentes structures du corps : articulations, muscles, ligaments et tissus.",
      "Elle repose sur une évaluation individualisée et sur des techniques manuelles choisies en fonction de chaque personne. L’objectif d’une séance est de contribuer à améliorer le confort et la mobilité, lorsque cela est indiqué, en tenant compte de votre état de santé et de vos attentes.",
    ],
  },
  {
    title: "Dans quelles situations consulter à Paris 3 ?",
    paragraphs: [
      "Il est possible de consulter un ostéopathe pour différentes gênes ou douleurs fonctionnelles : douleurs du dos et tensions musculaires, douleurs cervicales liées au quotidien, accompagnement de la grossesse et du post-partum, suivi adapté des nourrissons et des enfants, ou encore récupération physique chez les sportifs.",
      "Une consultation permet de faire le point sur ces gênes et d’évaluer si une prise en charge ostéopathique est adaptée à votre situation.",
    ],
  },
  {
    title: "Comment se déroule une consultation ?",
    paragraphs: [
      "La séance commence par un échange sur vos douleurs, vos antécédents, votre mode de vie et vos attentes. Des tests et observations permettent ensuite d’évaluer votre mobilité et de déterminer si une prise en charge ostéopathique est appropriée.",
      "Des techniques adaptées à votre âge, votre état de santé et vos besoins peuvent être proposées. La séance se termine par des conseils personnalisés et, si nécessaire, une orientation vers un autre professionnel de santé.",
    ],
  },
]

export function Blog() {
  return (
    <section className="blog-section" id="blog" aria-labelledby="blog-title">
      <div className="container">
        <div className="blog-intro">
          <div>
            <p className="section-kicker"><BookOpen size={14} aria-hidden="true" /> Le blog</p>
            <h2 id="blog-title">Comprendre son corps,<br />prendre soin de sa mobilité.</h2>
          </div>
          <p className="blog-intro-copy">Des repères simples et concrets pour mieux comprendre l’ostéopathie et prendre soin de votre équilibre au quotidien.</p>
        </div>

        <article className="blog-featured">
          <div className="blog-image-wrap">
            <img src="/blog-osteopathie-paris-3.png" alt="Soin manuel du dos lors d'une séance d'ostéopathie" />
            <span className="blog-image-label">Conseils &amp; pratique</span>
          </div>
          <div className="blog-article-content">
            <div className="blog-meta"><span>Novembre 2026</span><span className="blog-meta-dot" aria-hidden="true" /><span><MapPin size={13} aria-hidden="true" /> Paris 3</span></div>
            <h3>Ostéopathe à Paris 3 : pourquoi consulter un ostéopathe&nbsp;?</h3>
            <p className="blog-excerpt">Que vous souffriez de tensions musculaires, de douleurs au dos, de gênes articulaires ou que vous souhaitiez faire le point sur votre confort au quotidien, une consultation peut être l’occasion de bénéficier d’une prise en charge manuelle adaptée à votre situation.</p>
            <p className="blog-author">Par Illiana Cacoub, ostéopathe D.O. à Paris 3</p>

            <details className="blog-details">
              <summary>Lire l’article <ArrowUpRight size={16} aria-hidden="true" /></summary>
              <div className="blog-full-article">
                <p>Au cabinet d’Illiana Cacoub, chaque consultation commence par un échange afin de comprendre vos besoins, votre mode de vie et vos éventuelles douleurs.</p>
                {articleSections.map((section) => (
                  <section key={section.title}>
                    <h4>{section.title}</h4>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </section>
                ))}
                <section>
                  <h4>Pourquoi consulter Illiana Cacoub, ostéopathe à Paris 3&nbsp;?</h4>
                  <p>Consulter un ostéopathe, c’est avant tout bénéficier d’un temps d’écoute et d’une prise en charge individualisée. Au cabinet, l’accompagnement est adapté à votre profil et à vos besoins, que vous soyez adulte, sportif, femme enceinte, jeune parent ou que vous souhaitiez consulter pour votre enfant.</p>
                  <p>Chaque personne est unique : les techniques et les conseils sont choisis en fonction de la situation rencontrée.</p>
                </section>
                <section>
                  <h4>Prendre rendez-vous avec votre ostéopathe à Paris 3</h4>
                  <p>Vous pouvez prendre rendez-vous avec Illiana Cacoub directement en ligne via Doctolib. N’hésitez pas à consulter les informations pratiques du cabinet pour connaître les disponibilités, les tarifs et les modalités de consultation.</p>
                </section>
                <p className="blog-disclaimer"><strong>Information importante :</strong> l’ostéopathie ne se substitue pas à un diagnostic ou à un traitement médical. En cas de douleur intense, inhabituelle, persistante ou accompagnée de symptômes inquiétants, demandez un avis médical.</p>
              </div>
            </details>
          </div>
        </article>

        <article className="blog-secondary">
          <div className="blog-secondary-image">
            <img src="/blog-maternite-nourrisson-paris.png" alt="Massage doux des pieds d'un nourrisson" />
          </div>
          <div className="blog-secondary-content">
            <div className="blog-meta"><span>Novembre 2026</span><span className="blog-meta-dot" aria-hidden="true" /><span><MapPin size={13} aria-hidden="true" /> Paris</span></div>
            <h3>Maternité et nourrisson : ostéopathie à Paris</h3>
            <p className="blog-excerpt">Grossesse, arrivée de bébé, allaitement, sommeil, tensions corporelles… La maternité est une période de grands changements, aussi bien pour la maman que pour son bébé.</p>
            <p className="blog-author">Par Illiana Cacoub, ostéopathe D.O. à Paris 3</p>

            <details className="blog-details">
              <summary>Lire l’article <ArrowUpRight size={16} aria-hidden="true" /></summary>
              <div className="blog-full-article">
                <p>À Paris, je vous accompagne pendant la grossesse et après la naissance, pour vous aider à traverser ces différentes étapes avec davantage de confort et de sérénité.</p>
                <p>Pendant la grossesse, le corps s’adapte progressivement pour accompagner le développement du bébé. Après la naissance, le nourrisson découvre son nouvel environnement et développe peu à peu ses capacités motrices et sensorielles. Ces différentes étapes peuvent parfois s’accompagner d’inconforts ou de tensions.</p>
                <section>
                  <h4>Pendant la grossesse</h4>
                  <p>Les transformations du corps peuvent entraîner différentes manifestations :</p>
                  <ul>
                    <li>Douleurs lombaires et tensions dans le bassin</li>
                    <li>Sensation de pesanteur</li>
                    <li>Tensions dans le dos et les cervicales</li>
                    <li>Inconfort au niveau du diaphragme et de la respiration</li>
                    <li>Difficultés à trouver une position confortable pour dormir</li>
                  </ul>
                  <p>L’ostéopathie peut accompagner la future maman dans cette période de changements, en travaillant sur sa mobilité et son confort au quotidien.</p>
                </section>
                <section>
                  <h4>Après la naissance : accompagner bébé</h4>
                  <p>La naissance et les premières semaines de vie sont une période d’adaptation importante pour le nourrisson. Certains bébés peuvent présenter des manifestations telles que :</p>
                  <ul>
                    <li>Des difficultés à téter au sein ou au biberon</li>
                    <li>Une succion peu efficace ou des claquements pendant les tétées</li>
                    <li>Une préférence pour tourner la tête d’un seul côté</li>
                    <li>Des tensions corporelles ou une mobilité réduite</li>
                    <li>Des difficultés à trouver des positions confortables</li>
                    <li>Une agitation ou un inconfort pendant les temps d’éveil</li>
                  </ul>
                  <p>Ces manifestations peuvent avoir différentes origines et méritent une attention particulière.</p>
                </section>
                <section>
                  <h4>Comment l’ostéopathie peut-elle accompagner cette période à Paris&nbsp;?</h4>
                  <p>Lors d’une consultation, je prends le temps d’échanger avec vous sur votre grossesse, le déroulement de la naissance et les éventuelles difficultés rencontrées depuis l’arrivée de bébé.</p>
                  <p>J’observe ensuite sa posture, sa mobilité et son confort, en tenant compte de son âge et de ses besoins. À l’aide de techniques douces et adaptées, je peux accompagner les tensions et les restrictions de mobilité identifiées.</p>
                  <p>Chaque bébé est unique : la prise en charge est individualisée et se déroule dans le respect de son rythme.</p>
                </section>
                <p>Mon objectif : accompagner maman et bébé dans cette belle période de transition, favoriser leur confort et vous aider à vivre ces premiers moments plus sereinement.</p>
                <p>Parce que prendre soin de bébé, c’est aussi prendre soin de ses parents.</p>
                <p className="blog-disclaimer"><strong>Consultations :</strong> ostéopathie pour les femmes enceintes et les nourrissons à Paris.</p>
              </div>
            </details>
          </div>
        </article>
      </div>
    </section>
  )
}
