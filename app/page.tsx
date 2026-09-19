'use client'

import { ArrowUpRight, Clock, Euro, Menu, ShieldCheck, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const heroVideo = '/hero.mp4'
const heroPoster = '/hero-poster.webp'

const navItems = ['Votre Ostéopathe', 'Motifs', 'Approche', 'Séance', 'Avis', 'Infos', 'Questions']
const tags = ['Adultes', 'Nourrissons & enfants', 'Grossesse', 'Drainage']

const DOCTOLIB_URL =
  'https://doctolib.fr/osteopathe/paris/illiana-cacoub/booking?source=landing_page'
// TODO: remplacer par le vrai numéro du cabinet.
const PHONE = '+33100000000'

function StaggeredWords({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="word-reveal" style={{ animationDelay: `${index * 85 + 300}ms` }}>
          {word}{' '}
        </span>
      ))}
    </span>
  )
}

function ActionButton({
  children,
  href,
  light = false,
  arrow = false,
}: {
  children: string
  href: string
  light?: boolean
  arrow?: boolean
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className={`action-button ${light ? 'action-button-light' : 'action-button-outline'}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {arrow && <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />}
    </a>
  )
}

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className={`hero-shell ${loaded ? 'is-loaded' : ''}`}>
      <video
        className="hero-video"
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="hero-overlay" />
      <div className="hero-container">
        <header className="site-header">
          <a href="#top" className="wordmark">
            <span className="wordmark-name">Illiana Cacoub</span>
            <span className="wordmark-role">Ostéopathe D.O. — Paris 3</span>
          </a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} key={item}>{item}</a>
            ))}
          </nav>
          <a href={`tel:${PHONE}`} className="call-link">Appeler</a>
          <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
            Prendre RDV
          </a>
          <button className="menu-button" aria-label="Ouvrir le menu"><Menu size={21} /></button>
        </header>

        <section className="hero-content" id="top">
          <div className="hero-copy">
            <ul className="tag-row">
              {tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <h1>
              <StaggeredWords text="Redonnez à votre corps" />
              <br />
              <StaggeredWords text="sa liberté de mouvement." />
            </h1>
            <p>
              <StaggeredWords text="Ostéopathe D.O. à Paris 3 — Prise en charge globale pour" />
              <br className="desktop-break" />
              <StaggeredWords text="soulager vos tensions et retrouver une mobilité durable." />
            </p>
            <div className="hero-actions">
              <ActionButton light arrow href={DOCTOLIB_URL}>Réserver une consultation</ActionButton>
              <ActionButton href="#motifs">Voir les motifs</ActionButton>
            </div>
            <p className="hero-note">Ouvert dans un nouvel onglet (Doctolib). Cabinet Paris 3 — accès simple.</p>
          </div>

          <dl className="stat-row">
            <div className="stat">
              <dt>
                5/5
                <span className="stars" aria-label="5 étoiles sur 5">
                  <Star size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                </span>
              </dt>
              <dd>Google (10 avis)</dd>
            </div>
            <div className="stat">
              <dt>45 min <Clock size={13} strokeWidth={1.7} aria-hidden="true" /></dt>
              <dd>durée moyenne</dd>
            </div>
            <div className="stat">
              <dt>80€ <Euro size={13} strokeWidth={1.7} aria-hidden="true" /></dt>
              <dd>tarif</dd>
            </div>
            <div className="mutuelles-badge">
              <ShieldCheck size={14} strokeWidth={1.8} aria-hidden="true" />
              Mutuelles OK
            </div>
          </dl>
        </section>
      </div>
    </main>
  )
}
