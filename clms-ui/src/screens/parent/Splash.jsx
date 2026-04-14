import { useNavigate } from 'react-router-dom'
import { Shield } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'

export default function Splash() {
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        position: 'relative',
        overflow: 'hidden',
        background: `radial-gradient(circle, var(--border-subtle) 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}>
        {/* White overlay for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(255,255,255,0.88)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Logo */}
          <div style={{
            width: '88px', height: '88px',
            borderRadius: '24px',
            background: 'var(--accent-blue-bg)',
            border: '1px solid rgba(37,99,235,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '16px',
            boxShadow: '0 8px 32px rgba(37,99,235,0.15)',
          }}>
            <Shield size={44} color="var(--accent-blue)" strokeWidth={1.8} />
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '4px', letterSpacing: '-0.5px' }}>
            CLMS
          </h1>

          <div style={{ height: '1px', width: '40px', background: 'var(--border-strong)', margin: '20px 0' }} />

          {/* Tagline */}
          <p style={{
            fontSize: '22px', fontWeight: 700,
            color: 'var(--text-heading)',
            textAlign: 'center',
            maxWidth: '260px',
            lineHeight: 1.3,
            marginBottom: '12px',
          }}>
            Always know where they are.
          </p>

          <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            maxWidth: '280px',
            lineHeight: 1.6,
            marginBottom: '56px',
          }}>
            Real-time location monitoring for parents who care.
          </p>

          {/* CTA */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Button id="splash-get-started" variant="primary" fullWidth onClick={() => navigate('/register')}>
              Get Started
            </Button>
            <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)' }}>
              Already have an account?{' '}
              <span
                id="splash-sign-in-link"
                onClick={() => navigate('/login')}
                style={{ color: 'var(--accent-blue)', cursor: 'pointer', fontWeight: 500 }}
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </MobileFrame>
  )
}
