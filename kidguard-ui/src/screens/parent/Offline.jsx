import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import OfflineBanner from '../../components/OfflineBanner'
import MapMock from '../../components/MapMock'
import Button from '../../components/Button'

export default function Offline() {
  return (
    <MobileFrame>
      <OfflineBanner />

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <MapMock height={220} grayscale />

        {/* Stale data card */}
        <div style={{
          background: '#fff', border: '3px solid var(--border)',
          borderLeft: '4px solid var(--slab-orange)',
          boxShadow: '4px 4px 0 #0D0D0D', padding: '20px',
          display: 'flex', flexDirection: 'column', gap: '8px',
        }}>
          <span style={{ background: 'var(--slab-orange)', color: '#fff', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '2px 6px', display: 'inline-block', width: 'fit-content', fontFamily: 'var(--font-body)' }}>
            STALE DATA
          </span>
          <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-body)' }}>
            Last location recorded 8 min ago
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
            Reconnect to get live updates.
          </div>
          <Button variant="ghost" style={{ marginTop: '12px' }}>RETRY CONNECTION →</Button>
        </div>

        {/* Battery warning card */}
        <div style={{
          background: 'var(--slab-orange)', border: '2px solid var(--border)',
          padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', fontFamily: 'var(--font-body)' }}>
            ⚡ BATTERY AT 12%
          </div>
          <div style={{ fontSize: '12px', color: '#fff', opacity: 0.85, fontFamily: 'var(--font-body)' }}>
            Device may lose connection soon.
          </div>
        </div>
      </div>

      <BottomNav active="map" />
    </MobileFrame>
  )
}
