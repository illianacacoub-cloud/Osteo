import { bookingTrack, phoneTrack } from '@/lib/analytics'
import { ADDRESS, DOCTOLIB_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Illiana Cacoub</p>
          <p className="footer-role">Ostéopathe D.O. — Paris 3</p>
          <p><a href={PHONE_HREF} {...phoneTrack('footer')}>{PHONE_DISPLAY}</a></p>
          <p className="footer-muted">{ADDRESS}</p>
        </div>

        <div>
          <p className="footer-heading">Rendez-vous</p>
          <p>
            <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" {...bookingTrack('footer')}>
              Doctolib
            </a>
          </p>
        </div>

        <div>
          <p className="footer-heading">Mentions</p>
          <p><a href="#blog">Le blog</a></p>
          <p><a href="#mentions">Mentions légales</a></p>
          <p className="footer-muted">© {new Date().getFullYear()} Illiana Cacoub. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
