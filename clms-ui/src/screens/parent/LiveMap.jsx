import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import StatusChip from '../../components/StatusChip'
import Button from '../../components/Button'
import MapMock from '../../components/MapMock'
import { mockChild } from '../../data/mock'

export default function LiveMap() {
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

        {/* Full-height map */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <MapMock showPin showZone zoneName="Home" height="100%" />
        </div>

        {/* Floating top bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '56px',
          background: '#fff',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          zIndex: 10,
        }}>
          <button
            id="livemap-back-btn"
            onClick={() => navigate('/dashboard')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: '4px' }}
          >
            <ArrowLeft size={20} color="var(--text-body)" />
          </button>
          <p style={{ flex: 1, textAlign: 'center', fontSize: '15px', fontWeight: 600, color: 'var(--text-heading)' }}>
            Live Location
          </p>
          <span id="livemap-time-chip" style={{
            background: 'var(--bg-elevated)',
            borderRadius: '6px',
            padding: '4px 8px',
            fontSize: '11px',
            fontFamily: 'JetBrains Mono, monospace',
            color: 'var(--text-secondary)',
          }}>
            2 min ago
          </span>
        </div>

        {/* Floating bottom drawer */}
        <div style={{
          position: 'absolute',
          bottom: '64px',
          left: 0, right: 0,
          background: '#fff',
          borderRadius: '20px 20px 0 0',
          boxShadow: '0 -8px 32px rgba(0,0,0,0.12)',
          padding: '20px',
          zIndex: 10,
          minHeight: '220px',
        }}>
          <p style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '6px' }}>
            {mockChild.name}
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-body)', marginBottom: '8px' }}>
            {mockChild.location.address}
          </p>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
            <StatusChip variant="inside">Inside: Home Zone</StatusChip>
            <StatusChip variant="info">GPS Good</StatusChip>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace', marginBottom: '16px' }}>
            Updated {mockChild.location.updatedAt}
          </p>
          <Button id="livemap-history-btn" variant="ghost" fullWidth onClick={() => navigate('/history')}>
            View Location History
          </Button>
        </div>

        {/* BottomNav sits at very bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 11 }}>
          <BottomNav active="map" onNavigate={navigate} />
        </div>
      </div>
    </MobileFrame>
  )
}
