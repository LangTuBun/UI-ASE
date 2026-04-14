import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'
import OTPInput from '../../components/OTPInput'

export default function MFAVerify() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      {/* Top bar */}
      <div style={{
        background: '#fff', borderBottom: '2px solid var(--border)',
        padding: '0 16px', height: '56px',
        display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <ChevronLeft size={20} style={{ cursor: 'pointer' }} onClick={() => navigate('/login')} />
        <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
          VERIFY YOUR IDENTITY
        </span>
      </div>

      {/* Body */}
      <div style={{
        flex: 1, padding: '40px 20px 20px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px', textAlign: 'center', marginBottom: '12px' }}>
          <span style={{ background: 'var(--slab-blue)', color: '#fff', padding: '2px 8px' }}>TWO-FACTOR</span>
          {' '}AUTH
        </div>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', fontFamily: 'var(--font-body)', margin: '0 0 40px' }}>
          Enter the 6-digit code sent to your phone.
        </p>

        <OTPInput length={6} />

        <span style={{ marginTop: '16px', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
          Resend code in 0:45
        </span>

        <div style={{ marginTop: '32px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Button fullWidth variant="primary" onClick={() => navigate('/dashboard')}>VERIFY →</Button>
          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--slab-blue)', cursor: 'pointer', margin: 0, fontFamily: 'var(--font-body)' }}
            onClick={() => navigate('/login')}>
            Wrong number? <strong>GO BACK</strong>
          </p>
        </div>
      </div>
    </MobileFrame>
  )
}
