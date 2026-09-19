import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'

export const alt = 'Illiana Cacoub — Ostéopathe D.O. à Paris 3'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const portrait = `data:image/jpeg;base64,${readFileSync(
  join(process.cwd(), 'app', 'og-portrait.jpg'),
).toString('base64')}`

const facts = [
  ['5/5', 'Google · 10 avis'],
  ['45 min', 'durée moyenne'],
  ['80€', 'tarif'],
]

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0a161a',
          color: '#fff',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 0 64px 72px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 27, fontWeight: 700, letterSpacing: '-0.02em' }}>Illiana Cacoub</div>
            <div
              style={{
                marginTop: 8,
                fontSize: 15,
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.58)',
              }}
            >
              OSTÉOPATHE D.O. — PARIS 3
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 62,
              fontWeight: 500,
              letterSpacing: '-0.045em',
              lineHeight: 1.08,
            }}
          >
            <div>Redonnez à votre corps</div>
            <div>sa liberté de mouvement.</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 44 }}>
            {facts.map(([value, label]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-0.03em' }}>{value}</div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 14,
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.55)',
                  }}
                >
                  {label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', position: 'relative', width: 430, height: '100%' }}>
          <img src={portrait} width={430} height={630} style={{ objectFit: 'cover' }} alt="" />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 430,
              height: 630,
              backgroundImage:
                'linear-gradient(90deg, #0a161a 0%, rgba(10,22,26,0.55) 26%, rgba(10,22,26,0) 62%)',
            }}
          />
        </div>
      </div>
    ),
    size,
  )
}
