import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a161a',
          color: '#fff',
        }}
      >
        <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1 }}>IC</div>
        <div
          style={{
            marginTop: 14,
            fontSize: 15,
            letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          OSTÉO
        </div>
      </div>
    ),
    size,
  )
}
