import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'
import OTPInput from '../../components/OTPInput'

export default function MFAVerify() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  return (
    <MobileFrame>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <button
            id="mfa-back-btn"
            onClick={() => navigate(-1)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }}
          >
            <ArrowLeft size={20} color="var(--text-body)" />
          </button>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-heading)' }}>Two-factor auth</h1>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '40px', paddingLeft: '36px' }}>
          Enter the 6-digit code sent to your phone number.
        </p>

        <OTPInput value={otp} onChange={setOtp} />

        <p style={{
          textAlign: 'center',
          fontSize: '12px',
          color: 'var(--text-secondary)',
          fontFamily: 'JetBrains Mono, monospace',
          marginTop: '16px',
        }}>
          Resend code in 0:45
        </p>

        <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <Button id="mfa-verify-btn" variant="blue" fullWidth onClick={() => navigate('/dashboard')}>
            Verify
          </Button>
          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-secondary)' }}>
            <span
              id="mfa-go-back-link"
              onClick={() => navigate(-1)}
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              Wrong number? Go back
            </span>
          </p>
        </div>
      </div>
    </MobileFrame>
  )
}
