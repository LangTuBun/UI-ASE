import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '', email: '', password: '', confirmPassword: '',
    childName: '', deviceCode: ''
  })

  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }))

  return (
    <MobileFrame>
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
          <button
            id="register-back-btn"
            onClick={() => navigate(-1)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }}
          >
            <ArrowLeft size={20} color="var(--text-body)" />
          </button>
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-heading)' }}>Create Account</h1>
        </div>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '28px', paddingLeft: '36px' }}>
          Set up your parent account.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input id="reg-fullname" label="Full Name" placeholder="Nguyen Thi Lan" value={form.fullName} onChange={set('fullName')} />
          <Input id="reg-email" label="Email" type="email" placeholder="lan@example.com" value={form.email} onChange={set('email')} />
          <Input id="reg-password" label="Password" type="password" placeholder="••••••••" value={form.password} onChange={set('password')} />
          <Input id="reg-confirm" label="Confirm Password" type="password" placeholder="••••••••" value={form.confirmPassword} onChange={set('confirmPassword')} />
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '28px 0 20px' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>YOUR CHILD</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input id="reg-child-name" label="Child's Name" placeholder="Minh" value={form.childName} onChange={set('childName')} />
          <Input id="reg-device-code" label="Device Pairing Code" placeholder="e.g. CLMS-XXXX-XXXX" value={form.deviceCode} onChange={set('deviceCode')} />
        </div>

        <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <Button id="register-submit-btn" variant="primary" fullWidth onClick={() => navigate('/mfa')}>
            Create Account
          </Button>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)' }}>
            Already registered?{' '}
            <span
              id="register-signin-link"
              onClick={() => navigate('/login')}
              style={{ color: 'var(--accent-blue)', cursor: 'pointer', fontWeight: 500 }}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </MobileFrame>
  )
}
