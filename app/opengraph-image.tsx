import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'white',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2563eb',
              fontSize: '48px',
              fontWeight: 'bold',
              marginRight: '24px',
            }}
          >
            J
          </div>
          <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
            Jaken Finance Group
          </div>
        </div>
        <div style={{ fontSize: '32px', fontWeight: '600', textAlign: 'center', maxWidth: '800px' }}>
          Hard Money Loans in California
        </div>
        <div style={{ fontSize: '24px', marginTop: '20px', textAlign: 'center', opacity: 0.9 }}>
          Fast DSCR, Fix & Flip, and Bridge Loans for Real Estate Investors
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}