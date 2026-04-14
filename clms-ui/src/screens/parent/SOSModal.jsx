import { useNavigate } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'
import MapMock from '../../components/MapMock'
import { mockChild } from '../../data/mock'

export default function SOSModal() {
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Red header band */}
        <div style={{
          height: '88px',
          background: 'var(--danger)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexShrink: 0,
        }}>
          <AlertTriangle size={28} color="#fff" strokeWidth={2} />
          <span style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '0.05em' }}>
            SOS ALERT
          </span>
        </div>

        {/* Body */}
        <div style={{
          flex: 1, overflowY: 'auto',
          padding: '20px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          {/* Avatar */}
          <div style={{
            width: '72px', height: '72px',
            borderRadius: '50%',
            background: 'var(--danger-bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '32px', fontWeight: 700, color: 'var(--danger)',
            marginBottom: '12px',
          }}>M</div>

          <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '4px' }}>
            {mockChild.name}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            sent an emergency alert
          </p>

          {/* Map */}
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px' }}>
            <MapMock showPin showZone={false} height={180} />
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-body)', textAlign: 'center', marginBottom: '4px' }}>
            {mockChild.location.address}
          </p>
          <p style={{
            fontSize: '12px', color: 'var(--text-secondary)',
            fontFamily: 'JetBrains Mono, monospace',
            textAlign: 'center', marginBottom: '28px',
          }}>
            Today at 14:32
          </p>

          {/* Actions */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Button id="sos-call-btn" variant="primary" fullWidth onClick={() => {}}>
              Call {mockChild.name}
            </Button>
            <Button id="sos-dismiss-btn" variant="ghost" fullWidth onClick={() => navigate('/dashboard')}>
              Dismiss Alert
            </Button>
          </div>

          <p style={{
            fontSize: '12px', color: 'var(--text-secondary)',
            textAlign: 'center', marginTop: '16px', lineHeight: 1.5,
          }}>
            If unresolved, you'll be re-notified in 5 minutes.
          </p>
        </div>
      </div>
    </MobileFrame>
  )
}
