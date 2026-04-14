import { useNavigate } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import OfflineBanner from '../../components/OfflineBanner'
import Button from '../../components/Button'
import MapMock from '../../components/MapMock'
import Card from '../../components/Card'

export default function Offline() {
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <OfflineBanner />

        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Greyed map */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', filter: 'grayscale(0.7)' }}>
            <MapMock showPin height={220} />
          </div>

          {/* Warning card */}
          <Card style={{ padding: '20px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '8px' }}>
              <AlertTriangle size={20} color="var(--warning)" style={{ flexShrink: 0, marginTop: '1px' }} />
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-heading)' }}>
                Last location recorded 8 min ago
              </p>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px', paddingLeft: '30px' }}>
              Data may be outdated. Reconnect to get live updates.
            </p>
            <Button id="offline-retry-btn" variant="ghost" fullWidth>
              Retry Connection
            </Button>
          </Card>

          {/* Battery warning card */}
          <Card style={{ padding: '20px', background: 'var(--warning-bg)', border: '1px solid rgba(217,119,6,0.2)' }}>
            <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--warning)', marginBottom: '6px' }}>
              ⚡ Battery at 12%
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              The child's device may lose connection soon.
            </p>
          </Card>
        </div>

        <BottomNav active="map" onNavigate={navigate} />
      </div>
    </MobileFrame>
  )
}
