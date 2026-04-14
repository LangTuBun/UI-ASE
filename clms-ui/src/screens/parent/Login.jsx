import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Info } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <MobileFrame>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <h1 style={{ fontSize: '30px', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '8px' }}>
          Welcome back.
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
          Sign in to check on your child.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input id="login-email" label="Email" type="email" placeholder="lan@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          <div>
            <Input id="login-password" label="Password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
            <div style={{ textAlign: 'right', marginTop: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--accent-blue)', cursor: 'pointer', fontWeight: 500 }}>
                Forgot password?
              </span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Button id="login-submit-btn" variant="primary" fullWidth onClick={() => navigate('/mfa')}>
            Sign In
          </Button>

          {/* MFA notice chip */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            background: 'var(--accent-blue-bg)',
            border: '1px solid rgba(37,99,235,0.2)',
            borderRadius: '8px',
            padding: '8px 14px',
          }}>
            <Info size={14} color="var(--accent-blue)" />
            <span style={{ fontSize: '12px', color: 'var(--accent-blue)' }}>
              Verification code required after login
            </span>
          </div>
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            New to CLMS?{' '}
            <span
              id="login-register-link"
              onClick={() => navigate('/register')}
              style={{ color: 'var(--accent-blue)', cursor: 'pointer', fontWeight: 500 }}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </MobileFrame>
  )
}
