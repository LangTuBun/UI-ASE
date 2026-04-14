import { useNavigate } from 'react-router-dom'
import { WifiOff } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'
import Card from '../../components/Card'

export default function SOSQueued() {
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
        <WifiOff size={64} color="var(--warning)" strokeWidth={1.5} />

        <h1 style={{
          fontSize: '28px', fontWeight: 800,
          color: 'var(--text-heading)',
          textAlign: 'center',
          marginTop: '20px', marginBottom: '12px',
        }}>
          No connection
        </h1>

        <Card style={{
          background: 'var(--warning-bg)',
          border: '1px solid rgba(217,119,6,0.3)',
          padding: '20px',
          textAlign: 'center',
          marginBottom: '32px',
          width: '100%',
        }}>
          <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '8px' }}>
            Your SOS is saved.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            It will send automatically as soon as you're back online. Stay calm.
          </p>
        </Card>

        {/* Pulsing waiting indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <div className="dot-pulse" style={{
            width: '8px', height: '8px',
            borderRadius: '50%',
            background: 'var(--warning)',
          }} />
          <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Waiting for connection...
          </span>
        </div>

        <Button id="sos-queued-retry-btn" variant="blue" fullWidth onClick={() => navigate('/child/sos-confirm')}>
          Try Again
        </Button>
      </div>
    </MobileFrame>
  )
}
