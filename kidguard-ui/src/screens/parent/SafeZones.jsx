import { useNavigate } from 'react-router-dom'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import Button from '../../components/Button'
import ZoneCard from '../../components/ZoneCard'
import { mockZones } from '../../data/mock'

export default function SafeZones() {
  const navigate = useNavigate()
  const activeCount = mockZones.filter(z => z.active).length

  return (
    <MobileFrame>
      {/* Top bar */}
      <div style={{
        background: '#fff', borderBottom: '2px solid var(--border)',
        padding: '0 20px', height: '56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px' }}>SAFE ZONES</span>
        <span style={{ background: 'var(--slab-blue)', color: '#fff', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 8px', fontFamily: 'var(--font-body)' }}>
          {activeCount} ACTIVE
        </span>
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', margin: 0 }}>
          Define where your child should be.
        </p>
        {mockZones.map(zone => <ZoneCard key={zone.id} zone={zone} />)}
        <div style={{ marginTop: '12px' }}>
          <Button fullWidth variant="ghost" onClick={() => navigate('/zones/add')}>＋ ADD NEW ZONE</Button>
        </div>
      </div>

      <BottomNav active="zones" />
    </MobileFrame>
  )
}
