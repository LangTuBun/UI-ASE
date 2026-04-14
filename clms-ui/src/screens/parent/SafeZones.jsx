import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import ZoneCard from '../../components/ZoneCard'
import { mockZones } from '../../data/mock'

export default function SafeZones() {
  const navigate = useNavigate()
  const activeCount = mockZones.filter(z => z.active).length

  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{
          padding: '20px 20px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-heading)' }}>Safe Zones</h1>
          <span style={{
            background: 'var(--accent-blue-bg)',
            color: 'var(--accent-blue)',
            borderRadius: '999px',
            padding: '4px 12px',
            fontSize: '13px', fontWeight: 600,
          }}>{activeCount} Active</span>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', padding: '6px 20px 16px' }}>
          Define where your child should be.
        </p>

        {/* Zone list */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '100px' }}>
          {mockZones.map(z => (
            <ZoneCard key={z.id} name={z.name} type={z.type} radius={z.radius} active={z.active} />
          ))}
        </div>

        {/* FAB */}
        <button
          id="zones-add-fab"
          onClick={() => navigate('/zones/add')}
          style={{
            position: 'absolute',
            bottom: '88px',
            right: '24px',
            width: '56px', height: '56px',
            borderRadius: '50%',
            background: 'var(--accent-blue)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(37,99,235,0.4)',
            transition: 'transform 0.15s, box-shadow 0.15s',
            zIndex: 10,
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          <Plus size={24} color="#fff" strokeWidth={2.5} />
        </button>

        <BottomNav active="zones" onNavigate={navigate} />
      </div>
    </MobileFrame>
  )
}
