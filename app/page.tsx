'use client'

import { ArrowUpRight, Menu, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const backgroundImage = 'https://cdn.sceneai.art/Hero%20Section%20Video/802fa01f-44ef-4ab4-ac73-62015fe06eef.png'
const avatars = [
  'https://cdn.sceneai.art/Only%20man%20image/0ccd6017-25fc-493b-abdf-321915dde101.jpg',
  'https://cdn.sceneai.art/Only%20man%20image/7e1339ef-7a01-4979-93c8-21d97af291ee.webp',
  'https://cdn.sceneai.art/Image%20for%20any%20section/2d8032d8-c1cd-4827-84db-0aeba1109c1b.jpg',
  'https://cdn.sceneai.art/Image%20for%20any%20section/470b31f2-d1b5-4730-96a2-aca680204172.jpg',
]

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

function ActionButton({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <a href="#contact" className={`action-button ${light ? 'action-button-light' : 'action-button-outline'}`}>
      {children}
      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </a>
  )
}

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main
      className={`hero-shell ${loaded ? 'is-loaded' : ''}`}
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="hero-overlay" />
      <div className="hero-container">
        <header className="site-header">
          <a href="#top" className="wordmark">Healcure</a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {['Home', 'About', 'Services', 'Doctors', 'Blog'].map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>
            ))}
          </nav>
          <a href="#contact" className="nav-cta">Book An Appointment <ArrowUpRight aria-hidden="true" size={15} /></a>
          <button className="menu-button" aria-label="Open menu"><Menu size={21} /></button>
        </header>

        <section className="hero-content" id="top">
          <div className="hero-copy">
            <div className="trusted-badge"><span>Trusted</span><span>20,000+ Patients Worldwide</span></div>
            <h1><StaggeredWords text="Healthcare for Good" /><br /><StaggeredWords text="Today. Tomorrow. Always." /></h1>
            <p><StaggeredWords text="Take charge of your well-being and explore the many" /><br className="desktop-break" /><StaggeredWords text="advantages of modern healthcare through our trusted platform." /></p>
            <div className="hero-actions"><ActionButton light>Book An Appointment</ActionButton><ActionButton>About Us</ActionButton></div>
          </div>

          <div className="review-block" aria-label="Patient reviews">
            <div className="avatar-stack">
              {avatars.map((avatar, index) => <img key={avatar} src={avatar} alt={`Patient reviewer ${index + 1}`} />)}
            </div>
            <div className="review-copy"><div className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={13} fill="currentColor" />)}</div><span>Baser on 20K+ Reviews</span></div>
          </div>
        </section>
      </div>
    </main>
  )
}

