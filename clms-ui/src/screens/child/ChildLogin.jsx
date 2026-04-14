import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function ChildLogin() {
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
        padding: '24px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
          <Shield size={40} color="var(--accent-blue)" strokeWidth={1.8} />
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)' }}>CLMS</span>
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '10px' }}>
          Hi there 👋
        </h1>
        <p style={{
          fontSize: '14px', color: 'var(--text-secondary)',
          maxWidth: '260px', lineHeight: 1.6, marginBottom: '32px',
        }}>
          Sign in so your parents know you're safe.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <Input id="child-login-email" label="Email" type="email" placeholder="minh@example.com"
            value={email} onChange={e => setEmail(e.target.value)} />
          <Input id="child-login-password" label="Password" type="password" placeholder="••••••••"
            value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Button id="child-login-btn" variant="blue" fullWidth onClick={() => navigate('/child')}>
            Sign In
          </Button>
          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-secondary)' }}>
            <span
              id="child-login-parent-link"
              onClick={() => navigate('/login')}
              style={{ color: 'var(--accent-blue)', cursor: 'pointer', fontWeight: 500 }}
            >
              Parent account? Sign in here →
            </span>
          </p>
        </div>
      </div>
    </MobileFrame>
  )
}
