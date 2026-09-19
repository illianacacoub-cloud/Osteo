import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Baby,
  Dumbbell,
  GraduationCap,
  HandHeart,
  Feather,
  MapPin,
  Siren,
  Stethoscope,
  Waves,
  User,
} from 'lucide-react'

export const SITE_URL = 'https://osteo.tfq.one'

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
