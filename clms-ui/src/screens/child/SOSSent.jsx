import { useNavigate } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'

export default function SOSSent() {
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: '#fff',
      }}>
        <CheckCircle size={72} color="var(--success)" strokeWidth={1.5} />

        <h1 style={{
          fontSize: '32px', fontWeight: 800,
          color: 'var(--text-heading)',
          marginTop: '16px', marginBottom: '8px',
          textAlign: 'center',
        }}>
          Alert Sent!
        </h1>

        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '4px' }}>
          Your parents have been notified.
        </p>
        <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--success)', textAlign: 'center', marginBottom: '48px' }}>
          Help is on the way.
        </p>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button id="sos-sent-home-btn" variant="ghost" fullWidth onClick={() => navigate('/child')}>
            Return to Home
          </Button>
          <Button id="sos-sent-call-btn" variant="blue" fullWidth onClick={() => {}}>
            Call Mum
          </Button>
        </div>
      </div>
    </MobileFrame>
  )
}
