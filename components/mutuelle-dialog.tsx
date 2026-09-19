'use client'

import { X } from 'lucide-react'
import { useRef, type ReactNode } from 'react'

import { bookingTrack } from '@/lib/analytics'
import { DOCTOLIB_URL, MUTUELLE_YEAR, mutuelleBlocks } from '@/lib/content'

const DIALOG_ID = 'mutuelle-dialog'

function dialog() {
  return document.getElementById(DIALOG_ID) as HTMLDialogElement | null
}

/** Bouton d'ouverture — utilisable depuis un composant serveur. */
export function MutuelleTrigger({
  className,
  children,
  ...rest
}: {
  className?: string
  children: ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      onClick={() => dialog()?.showModal()}
      {...rest}
    >
      {children}
    </button>
  )
}

export function MutuelleDialog() {
  const ref = useRef<HTMLDialogElement>(null)

  const close = () => ref.current?.close()

  return (
    <dialog
      id={DIALOG_ID}
      ref={ref}
      className="mutuelle-dialog"
      aria-labelledby="mutuelle-dialog-title"
      // clic sur le fond : la cible est le <dialog> lui-même, pas son contenu
      onClick={(event) => {
        if (event.target === ref.current) close()
      }}
    >
      <div className="dialog-inner">
        <header className="dialog-header">
          <div>
            <h2 id="mutuelle-dialog-title">
              Remboursement ostéopathie &amp; mutuelles — {MUTUELLE_YEAR}
            </h2>
            <p>Ce qu&apos;il faut savoir avant votre séance</p>
          </div>
          <button type="button" className="dialog-close" onClick={close} aria-label="Fermer">
            <X size={20} strokeWidth={1.7} aria-hidden="true" />
          </button>
        </header>

        <ul className="dialog-blocks">
          {mutuelleBlocks.map(({ icon: Icon, title, body, items }) => (
            <li key={title}>
              <span className="dialog-icon">
                <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <strong>{title}</strong>
                {body && <p>{body}</p>}
                {items && (
                  <ul className="dialog-bullets">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>

        <footer className="dialog-footer">
          <div className="dialog-actions">
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="dialog-primary"
              {...bookingTrack('mutuelle')}
            >
              Prendre RDV
            </a>
            <button
              type="button"
              className="dialog-secondary"
              onClick={() => {
                close()
                document.getElementById('questions')?.scrollIntoView()
              }}
            >
              FAQ
            </button>
          </div>
          <p className="dialog-note">Informations indicatives selon votre contrat.</p>
        </footer>
      </div>
    </dialog>
  )
}
