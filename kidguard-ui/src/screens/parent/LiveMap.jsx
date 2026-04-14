import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import MapMock from '../../components/MapMock'
import StatusChip from '../../components/StatusChip'
import Button from '../../components/Button'
import { mockChild } from '../../data/mock'

export default function LiveMap() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>
        {/* Map fill */}
        <div style={{ position: 'absolute', inset: 0, bottom: '60px' }}>
          <MapMock showPin showZone height="100%" />
        </div>

        {/* Floating top bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          background: '#fff', borderBottom: '2px solid var(--border)',
          height: '56px', padding: '0 16px', zIndex: 10,
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <ChevronLeft size={20} style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')} />
          <span style={{ flex: 1, textAlign: 'center', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-body)' }}>
            LIVE LOCATION
          </span>
          <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', border: '1px solid var(--border)', background: '#fff', padding: '3px 6px' }}>
            2 MIN AGO
          </span>
        </div>

        {/* Floating bottom card */}
        <div style={{
          position: 'absolute', bottom: '60px', left: 0, right: 0,
          background: '#fff',
          borderTop: '2px solid var(--border)',
          borderLeft: '2px solid var(--border)',
          borderRight: '2px solid var(--border)',
          padding: '20px', zIndex: 10,
          display: 'flex', flexDirection: 'column', gap: '8px',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px' }}>{mockChild.name.toUpperCase()}</div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{mockChild.location.address}</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <StatusChip label="INSIDE: HOME ZONE" variant="inside" />
            <StatusChip label="GPS GOOD" variant="info" />
          </div>
          <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            Updated {mockChild.location.updatedAt}
          </div>
          <Button fullWidth variant="ghost" onClick={() => navigate('/history')} style={{ marginTop: '8px' }}>VIEW HISTORY →</Button>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <BottomNav active="map" />
        </div>
      </div>
    </MobileFrame>
  )
}
