import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Baby,
  FileText,
  Search,
  Dumbbell,
  GraduationCap,
  HandHeart,
  Feather,
  MapPin,
  ShieldCheck,
  Siren,
  Stethoscope,
  Waves,
  User,
} from 'lucide-react'

export const SITE_URL = 'https://osteo.tfq.one'

export const GTM_ID = 'GTM-5G4HJJKX'

export const DOCTOLIB_URL =
  'https://doctolib.fr/osteopathe/paris/illiana-cacoub/booking?source=landing_page'

export const PHONE_DISPLAY = '07 87 26 15 08'
export const PHONE_HREF = 'tel:+33787261508'

export const ADDRESS_STREET = '41 rue de Turbigo'
export const ADDRESS_POSTCODE = '75003'
export const ADDRESS_CITY = 'Paris'

/** Sur une ligne — footer, titre de l'iframe, données structurées. */
export const ADDRESS = `${ADDRESS_STREET}, ${ADDRESS_POSTCODE} ${ADDRESS_CITY}`
/** Sur deux lignes — carte « Infos pratiques » (white-space: pre-line). */
export const ADDRESS_LINES = `${ADDRESS_STREET},\n${ADDRESS_POSTCODE} ${ADDRESS_CITY}`
export const MAPS_URL = 'https://maps.google.com/?q=41+rue+de+Turbigo,+75003+Paris'
export const MAPS_EMBED = 'https://maps.google.com/maps?q=41+rue+de+Turbigo,+75003+Paris&z=16&output=embed'

export const navItems = [
  { label: 'Votre Ostéopathe', href: '#osteopathe' },
  { label: 'Motifs', href: '#motifs' },
  { label: 'Approche', href: '#approche' },
  { label: 'Séance', href: '#seance' },
  { label: 'Infos', href: '#infos' },
  { label: 'Questions', href: '#questions' },
]

export const heroTags = ['Adultes', 'Nourrissons & enfants', 'Grossesse', 'Drainage']

export const bio =
  "Illiana Cacoub est une ostéopathe en exercice à Paris, formée pour pratiquer des soins ostéopathiques manuels destinés à soulager les douleurs musculo-squelettiques et favoriser l'équilibre corporel. Elle reçoit des patients dans son cabinet avec une approche globale, bienveillante et adaptée à chaque individu."

export const credentials: { icon: LucideIcon; label: string; title: string; detail: string }[] = [
  {
    icon: GraduationCap,
    label: 'Formation',
    title: 'Diplômée D.O.',
    detail: "École agréée par l'État (5 ans)",
  },
  {
    icon: Feather,
    label: 'Pratique',
    title: 'Douce & précise',
    detail: 'Tissulaire, structurelle, viscérale',
  },
  {
    icon: Stethoscope,
    label: 'Vision',
    title: 'Approche globale',
    detail: 'Traiter la cause, pas le symptôme',
  },
]

type MotifAction = 'book' | 'call'

export const motifs: {
  icon: LucideIcon
  title: string
  items: string[]
  action: MotifAction
  actionLabel: string
  urgent?: boolean
}[] = [
  {
    icon: User,
    title: 'Adultes',
    items: [
      'Dos, cervicales, sciatique, douleurs articulaires',
      'Migraines, tensions cervicales, bruxisme',
      'Troubles fonctionnels : digestion, ORL, circulation, sommeil',
    ],
    action: 'book',
    actionLabel: 'Réserver',
  },
  {
    icon: Baby,
    title: 'Nourrisson & enfant',
    items: [
      'Plagiocéphalie / asymétrie du crâne',
      'Torticolis congénital, reflux, coliques',
      'Sommeil, agitation, posture, succion/allaitement',
    ],
    action: 'book',
    actionLabel: 'Réserver',
  },
  {
    icon: HandHeart,
    title: 'Grossesse & post-partum',
    items: [
      'Douleurs pelviennes et lombaires',
      'Sciatique liée à la grossesse',
      'Préparation & récupération post-partum',
    ],
    action: 'book',
    actionLabel: 'Réserver',
  },
  {
    icon: Waves,
    title: 'Drainage lymphatique',
    items: [
      "Jambes lourdes, rétention d'eau, œdèmes",
      'Récupération post-opératoire (selon indication)',
      'Détente, sensation de légèreté',
    ],
    action: 'book',
    actionLabel: 'Découvrir',
  },
  {
    icon: Dumbbell,
    title: 'Sportifs',
    items: [
      'Préparation physique & récupération',
      'Douleurs musculaires, tendinites, entorses',
      'Amélioration de la mobilité et performance',
    ],
    action: 'book',
    actionLabel: 'Réserver',
  },
  {
    icon: Siren,
    title: 'Urgence',
    items: ['Blocage lombaire/dorsal/cervical', 'Blocage ATM / mâchoire', 'Douleurs aiguës'],
    action: 'call',
    actionLabel: 'Appeler',
    urgent: true,
  },
]

export const approcheChecks = [
  'Séances personnalisées',
  'Soulagement dès les premières séances',
  'Conseils concrets pour prolonger les effets',
]

export const approcheCards: { icon: LucideIcon; title: string; detail: string }[] = [
  {
    icon: Activity,
    title: 'Séances personnalisées',
    detail: 'Un plan adapté, sans protocole standard.',
  },
  {
    icon: HandHeart,
    title: 'Techniques douces',
    detail: 'Respect du corps et adaptation au profil.',
  },
  {
    icon: MapPin,
    title: 'Cabinet accessible',
    detail: 'Paris 3 — proche transports, horaires flexibles.',
  },
]

// Les retours à la ligne sont voulus : `.step-grid p` est en white-space: pre-line.
export const seanceSteps = [
  { step: '01', title: 'Anamnèse', detail: "Temps d'échange :\nmotif, antécédents, objectifs." },
  { step: '02', title: 'Tests & bilan', detail: 'Bilan global pour identifier\ntensions et restrictions.' },
  { step: '03', title: 'Traitement', detail: 'Techniques manuelles adaptées,\nprécises et douces.' },
  { step: '04', title: 'Conseils', detail: 'Conseils personnalisés\npour prolonger les bénéfices.' },
]

/** Année affichée dans le titre de la modale mutuelles — à revoir chaque année. */
export const MUTUELLE_YEAR = 2026

export const mutuelleBlocks: { icon: LucideIcon; title: string; body?: string; items?: string[] }[] = [
  {
    icon: ShieldCheck,
    title: 'Prise en charge par votre mutuelle',
    body: "L'ostéopathie n'est pas remboursée par la Sécu, mais la plupart des mutuelles proposent un forfait annuel ou par séance.",
  },
  {
    icon: Search,
    title: 'Comment vérifier ?',
    items: [
      'Consultez votre tableau de garanties (« médecines douces »).',
      'Contactez votre mutuelle pour confirmer votre forfait.',
    ],
  },
  {
    icon: FileText,
    title: 'Documents à fournir',
    body: 'Une facture nominative vous sera remise par email après la séance pour votre remboursement.',
  },
]

export const faq = [
  {
    question: 'Pour quels motifs consulter un ostéopathe ?',
    answer:
      'Dos, cervicales, sciatiques, migraines, troubles digestifs, stress, douleurs articulaires, suivi de grossesse, troubles du nourrisson ou prévention.',
  },
  {
    question: "Qu'est-ce que l'ostéopathie ?",
    answer:
      'Une thérapie manuelle visant à prévenir et soulager certains troubles fonctionnels en restaurant mobilité et équilibre du corps.',
  },
  {
    question: 'Quels effets après une séance ?',
    answer:
      'Sensation de légèreté et détente possible. Parfois, fatigue transitoire. Les effets varient selon les personnes.',
  },
  {
    question: "À qui s'adresse le drainage lymphatique ?",
    answer:
      "Jambes lourdes, rétention d'eau, œdèmes, fatigue, stress, récupération (selon indication) ou démarche de bien-être.",
  },
]

export const BLOG_AUTHOR = 'Par Illiana Cacoub, ostéopathe D.O. à Paris 3'

export const BLOG_DISCLAIMER_LABEL = 'Information importante'
export const BLOG_DISCLAIMER_BODY =
  'L’ostéopathie ne se substitue pas à un diagnostic ou à un traitement médical. En cas de douleur intense, inhabituelle, persistante ou accompagnée de symptômes inquiétants, demandez un avis médical.'

export const blogArticles: {
  slug: string
  image: string
  alt: string
  label: string
  date: string
  place: string
  title: string
  excerpt: string
  intro: string[]
  sections: { title?: string; paragraphs: string[]; items?: string[] }[]
}[] = [
  {
    slug: 'maternite-nourrisson-paris',
    image: '/blog-maternite-nourrisson-paris.png',
    alt: "Massage doux des pieds d'un nourrisson",
    label: 'Grossesse & nourrisson',
    date: 'Novembre 2026',
    place: 'Paris',
    title: 'Maternité et nourrisson : ostéopathie à Paris',
    excerpt:
      'Grossesse, arrivée de bébé, allaitement, sommeil, tensions corporelles… La maternité est une période de grands changements, aussi bien pour la maman que pour son bébé.',
    intro: [
      'À Paris, je vous accompagne pendant la grossesse et après la naissance, pour vous aider à traverser ces différentes étapes avec davantage de confort et de sérénité.',
      'Pendant la grossesse, le corps s’adapte progressivement pour accompagner le développement du bébé. Après la naissance, le nourrisson découvre son nouvel environnement et développe peu à peu ses capacités motrices et sensorielles. Ces différentes étapes peuvent parfois s’accompagner d’inconforts ou de tensions.',
    ],
    sections: [
      {
        title: 'Pendant la grossesse',
        paragraphs: ['Les transformations du corps peuvent entraîner différentes manifestations :'],
        items: [
          'Douleurs lombaires et tensions dans le bassin',
          'Sensation de pesanteur',
          'Tensions dans le dos et les cervicales',
          'Inconfort au niveau du diaphragme et de la respiration',
          'Difficultés à trouver une position confortable pour dormir',
        ],
      },
      {
        paragraphs: [
          'L’ostéopathie peut accompagner la future maman dans cette période de changements, en travaillant sur sa mobilité et son confort au quotidien.',
        ],
      },
      {
        title: 'Après la naissance : accompagner bébé',
        paragraphs: [
          'La naissance et les premières semaines de vie sont une période d’adaptation importante pour le nourrisson. Certains bébés peuvent présenter des manifestations telles que :',
        ],
        items: [
          'Des difficultés à téter au sein ou au biberon',
          'Une succion peu efficace ou des claquements pendant les tétées',
          'Une préférence pour tourner la tête d’un seul côté',
          'Des tensions corporelles ou une mobilité réduite',
          'Des difficultés à trouver des positions confortables',
          'Une agitation ou un inconfort pendant les temps d’éveil',
        ],
      },
      {
        paragraphs: ['Ces manifestations peuvent avoir différentes origines et méritent une attention particulière.'],
      },
      {
        title: 'Comment l’ostéopathie peut-elle accompagner cette période à Paris ?',
        paragraphs: [
          'Lors d’une consultation, je prends le temps d’échanger avec vous sur votre grossesse, le déroulement de la naissance et les éventuelles difficultés rencontrées depuis l’arrivée de bébé.',
          'J’observe ensuite sa posture, sa mobilité et son confort, en tenant compte de son âge et de ses besoins. À l’aide de techniques douces et adaptées, je peux accompagner les tensions et les restrictions de mobilité identifiées.',
          'Chaque bébé est unique : la prise en charge est individualisée et se déroule dans le respect de son rythme.',
        ],
      },
      {
        paragraphs: [
          'Mon objectif : accompagner maman et bébé dans cette belle période de transition, favoriser leur confort et vous aider à vivre ces premiers moments plus sereinement.',
          'Parce que prendre soin de bébé, c’est aussi prendre soin de ses parents.',
        ],
      },
    ],
  },
  {
    slug: 'osteopathe-paris-3',
    image: '/blog-osteopathie-paris-3.png',
    alt: "Soin manuel du dos lors d'une séance d'ostéopathie",
    label: 'Conseils & pratique',
    date: 'Novembre 2026',
    place: 'Paris 3',
    title: 'Ostéopathe à Paris 3 : pourquoi consulter un ostéopathe ?',
    excerpt:
      'Que vous souffriez de tensions musculaires, de douleurs au dos, de gênes articulaires ou que vous souhaitiez faire le point sur votre confort au quotidien, une consultation peut être l’occasion de bénéficier d’une prise en charge manuelle adaptée à votre situation.',
    intro: [
      'Au cabinet d’Illiana Cacoub, chaque consultation commence par un échange afin de comprendre vos besoins, votre mode de vie et vos éventuelles douleurs.',
    ],
    sections: [
      {
        title: 'Qu’est-ce que l’ostéopathie ?',
        paragraphs: [
          'L’ostéopathie est une approche de soin manuelle qui s’intéresse notamment à la mobilité des différentes structures du corps : articulations, muscles, ligaments et tissus.',
          'Elle repose sur une évaluation individualisée et sur des techniques manuelles choisies en fonction de chaque personne. L’objectif d’une séance est de contribuer à améliorer le confort et la mobilité, lorsque cela est indiqué, en tenant compte de votre état de santé et de vos attentes.',
        ],
      },
      {
        title: 'Dans quelles situations consulter à Paris 3 ?',
        paragraphs: [
          'Il est possible de consulter un ostéopathe pour différentes gênes ou douleurs fonctionnelles : douleurs du dos et tensions musculaires, douleurs cervicales liées au quotidien, accompagnement de la grossesse et du post-partum, suivi adapté des nourrissons et des enfants, ou encore récupération physique chez les sportifs.',
          'Une consultation permet de faire le point sur ces gênes et d’évaluer si une prise en charge ostéopathique est adaptée à votre situation.',
        ],
      },
      {
        title: 'Comment se déroule une consultation ?',
        paragraphs: [
          'La séance commence par un échange sur vos douleurs, vos antécédents, votre mode de vie et vos attentes. Des tests et observations permettent ensuite d’évaluer votre mobilité et de déterminer si une prise en charge ostéopathique est appropriée.',
          'Des techniques adaptées à votre âge, votre état de santé et vos besoins peuvent être proposées. La séance se termine par des conseils personnalisés et, si nécessaire, une orientation vers un autre professionnel de santé.',
        ],
      },
      {
        title: 'Pourquoi consulter Illiana Cacoub, ostéopathe à Paris 3 ?',
        paragraphs: [
          'Consulter un ostéopathe, c’est avant tout bénéficier d’un temps d’écoute et d’une prise en charge individualisée. Au cabinet, l’accompagnement est adapté à votre profil et à vos besoins, que vous soyez adulte, sportif, femme enceinte, jeune parent ou que vous souhaitiez consulter pour votre enfant.',
          'Chaque personne est unique : les techniques et les conseils sont choisis en fonction de la situation rencontrée.',
        ],
      },
      {
        title: 'Prendre rendez-vous avec votre ostéopathe à Paris 3',
        paragraphs: [
          'Vous pouvez prendre rendez-vous avec Illiana Cacoub directement en ligne via Doctolib. N’hésitez pas à consulter les informations pratiques du cabinet pour connaître les disponibilités, les tarifs et les modalités de consultation.',
        ],
      },
    ],
  },
]
