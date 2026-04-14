import { useNavigate } from 'react-router-dom'
import { Bell } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import Card from '../../components/Card'
import StatusChip from '../../components/StatusChip'
import MapMock from '../../components/MapMock'
import NotificationCard from '../../components/NotificationCard'
import { mockChild, mockNotifications } from '../../data/mock'

export default function Dashboard() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      {/* Top bar */}
      <div style={{
        background: '#fff', borderBottom: '2px solid var(--border)',
        padding: '0 20px', height: '56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
            GOOD MORNING,
          </div>
          <div style={{ fontSize: '18px', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            Minh Khang 👋
          </div>
        </div>
        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => navigate('/notifications')}>
          <Bell size={22} />
          <div style={{
            position: 'absolute', top: '-6px', right: '-6px',
            width: '16px', height: '16px', background: 'var(--slab-orange)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '10px', color: '#fff', fontWeight: 700 }}>2</span>
          </div>
        </div>
      </div>

      {/* Scrollable body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Child status card */}
        <Card heavy padding="16px">
          <div style={{ marginBottom: '10px' }}>
            <span style={{ background: 'var(--slab-blue)', color: '#fff', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '2px 8px', fontFamily: 'var(--font-body)' }}>
              CHILD STATUS
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '48px', height: '48px', border: '2px solid var(--border)',
              background: 'var(--bg-base)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', fontWeight: 700, flexShrink: 0,
            }}>B</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '16px', fontWeight: 600, fontFamily: 'var(--font-body)' }}>{mockChild.name}</div>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>Last seen {mockChild.lastSeen}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
              <StatusChip label="ONLINE" variant="online" />
              <span style={{ fontSize: '12px', color: 'var(--slab-orange)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>⚡ {mockChild.battery}%</span>
            </div>
          </div>
        </Card>

        {/* Map preview card */}
        <div style={{ border: '3px solid var(--border)', boxShadow: '4px 4px 0 #0D0D0D', overflow: 'hidden' }}>
          <MapMock showPin showZone zoneName="Home" height={200} />
          <div style={{
            background: '#fff', borderTop: '2px solid var(--border)', padding: '12px 16px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <StatusChip label="INSIDE: HOME" variant="inside" />
            <span
              onClick={() => navigate('/map')}
              style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--slab-blue)', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
              VIEW LIVE MAP →
            </span>
          </div>
        </div>

        {/* Recent alerts */}
        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
          RECENT ALERTS
        </div>
        {mockNotifications.slice(0, 2).map(n => <NotificationCard key={n.id} notification={n} />)}
      </div>

      <BottomNav active="map" />
    </MobileFrame>
  )
}
