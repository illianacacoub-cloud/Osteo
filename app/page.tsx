'use client'

import { ArrowUpRight, Clock, Euro, Menu, ShieldCheck, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Approche } from '@/components/sections/approche'
import { Faq } from '@/components/sections/faq'
import { Infos } from '@/components/sections/infos'
import { Motifs } from '@/components/sections/motifs'
import { Osteopathe } from '@/components/sections/osteopathe'
import { Seance } from '@/components/sections/seance'
import { SiteFooter } from '@/components/sections/site-footer'
import { DOCTOLIB_URL, PHONE_HREF, heroTags, navItems } from '@/lib/content'
import { bookingTrack, phoneTrack } from '@/lib/analytics'

const heroVideo = '/hero.mp4'
const heroPoster = '/hero-poster.webp'

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
  track,
}: {
  children: string
  href: string
  light?: boolean
  arrow?: boolean
  track?: Record<string, string>
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className={`action-button ${light ? 'action-button-light' : 'action-button-outline'}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...track}
    >
      {children}
      {arrow && <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />}
    </a>
  )
}

function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className={`hero-shell ${loaded ? 'is-loaded' : ''}`}>
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
            {navItems.map(({ label, href }) => (
              <a href={href} key={href}>{label}</a>
            ))}
          </nav>
          <a href={PHONE_HREF} className="call-link" {...phoneTrack('nav')}>Appeler</a>
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            {...bookingTrack('nav')}
          >
            Prendre RDV
          </a>
          <button className="menu-button" aria-label="Ouvrir le menu"><Menu size={21} /></button>
        </header>

        <div className="hero-content" id="top">
          <div className="hero-copy">
            <ul className="tag-row">
              {heroTags.map((tag) => <li key={tag}>{tag}</li>)}
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
              <ActionButton light arrow href={DOCTOLIB_URL} track={bookingTrack('hero')}>
                Réserver une consultation
              </ActionButton>
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
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main>
      <Hero />
      <Osteopathe />
      <Motifs />
      <Approche />
      <Seance />
      <Infos />
      <Faq />
      <SiteFooter />
    </main>
  )
}
