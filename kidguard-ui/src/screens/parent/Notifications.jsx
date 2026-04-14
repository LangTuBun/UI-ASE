import { useState } from 'react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import NotificationCard from '../../components/NotificationCard'
import { mockNotifications } from '../../data/mock'

const filters = ['ALL', 'GEOFENCE', 'SOS']

export default function Notifications() {
  const [activeFilter, setActiveFilter] = useState(0)
  const unreadCount = mockNotifications.filter(n => !n.read).length

  const filtered = activeFilter === 0
    ? mockNotifications
    : mockNotifications.filter(n => n.type === filters[activeFilter].toLowerCase())

  return (
    <MobileFrame>
      {/* Top bar */}
      <div style={{
        background: '#fff', borderBottom: '2px solid var(--border)',
        padding: '0 20px', height: '56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px' }}>ALERTS</span>
        <div style={{
          width: '20px', height: '20px', background: 'var(--slab-red)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: '11px', color: '#fff', fontWeight: 700 }}>{unreadCount}</span>
        </div>
      </div>

      {/* Segmented filter */}
      <div style={{
        padding: '12px 20px', borderBottom: '2px solid var(--border)',
        display: 'flex', gap: '0',
      }}>
        {filters.map((f, i) => (
          <button key={f} onClick={() => setActiveFilter(i)} style={{
            flex: 1, height: '36px',
            background: activeFilter === i ? 'var(--slab-blue)' : 'transparent',
            color: activeFilter === i ? '#fff' : 'var(--text-muted)',
            border: '2px solid var(--border)',
            borderRight: i < filters.length - 1 ? 'none' : '2px solid var(--border)',
            fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.04em', cursor: 'pointer', fontFamily: 'var(--font-body)',
          }}>
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filtered.map(n => <NotificationCard key={n.id} notification={n} />)}
      </div>

      <BottomNav active="alerts" />
    </MobileFrame>
  )
}
