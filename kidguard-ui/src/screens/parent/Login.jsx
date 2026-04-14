import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function Login() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      {/* Top bar */}
      <div style={{
        background: '#fff', borderBottom: '2px solid var(--border)',
        padding: '0 16px', height: '56px',
        display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <ChevronLeft size={20} style={{ cursor: 'pointer' }} onClick={() => navigate('/')} />
        <span style={{
          border: '2px solid var(--border)', background: '#fff',
          fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em',
          textTransform: 'uppercase', padding: '4px 10px', fontFamily: 'var(--font-body)',
        }}>
          PARENT LOGIN
        </span>
      </div>

      {/* Body */}
      <div style={{
        flex: 1, padding: '32px 20px 20px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0',
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '32px', marginBottom: '8px' }}>
          WELCOME BACK.
        </div>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', margin: '0 0 32px' }}>
          Sign in to check on your child.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Email" type="email" placeholder="minhkhang@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--slab-blue)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
              FORGOT PASSWORD?
            </span>
          </div>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button fullWidth variant="dark" onClick={() => navigate('/mfa')}>SIGN IN →</Button>

          {/* Info notice */}
          <div style={{
            background: '#fff', border: '2px solid var(--border)', padding: '12px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ fontSize: '16px' }}>✱</span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
              Verification code required after sign in
            </span>
          </div>

          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--slab-blue)', cursor: 'pointer', margin: '12px 0 0', fontFamily: 'var(--font-body)' }}
            onClick={() => navigate('/register')}>
            New here? <strong>CREATE ACCOUNT</strong>
          </p>
        </div>
      </div>
    </MobileFrame>
  )
}
