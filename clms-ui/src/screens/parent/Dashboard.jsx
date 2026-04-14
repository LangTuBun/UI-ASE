import { useNavigate } from 'react-router-dom'
import { Bell, Zap } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import StatusChip from '../../components/StatusChip'
import MapMock from '../../components/MapMock'
import NotificationCard from '../../components/NotificationCard'
import Card from '../../components/Card'
import { mockChild, mockNotifications } from '../../data/mock'

export default function Dashboard() {
  const navigate = useNavigate()
  const unread = mockNotifications.filter(n => !n.read)

  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Top bar */}
        <div style={{
          height: '60px',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
          borderBottom: '1px solid var(--border-subtle)',
        }}>
          <div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1 }}>Good morning,</p>
            <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-heading)', lineHeight: 1.2 }}>Lan 👋</p>
          </div>
          <button
            id="dashboard-bell-btn"
            onClick={() => navigate('/notifications')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', padding: '8px' }}
          >
            <Bell size={22} color="var(--text-body)" />
            {unread.length > 0 && (
              <span style={{
                position: 'absolute', top: '4px', right: '4px',
                background: 'var(--danger)', color: '#fff',
                borderRadius: '999px', fontSize: '10px', fontWeight: 700,
                minWidth: '16px', height: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '0 4px',
              }}>{unread.length}</span>
            )}
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Child status card */}
          <Card style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'var(--bg-elevated)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px', fontWeight: 700, color: 'var(--text-secondary)',
                flexShrink: 0,
              }}>M</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-heading)' }}>{mockChild.name}</p>
                <StatusChip variant="online">● Online</StatusChip>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Zap size={14} color="#D97706" />
                <span style={{ fontSize: '13px', fontWeight: 500, color: '#D97706' }}>{mockChild.battery}%</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Last updated</span>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>
                {mockChild.location.updatedAt}
              </span>
            </div>
          </Card>

          {/* Map preview card */}
          <Card style={{ padding: 0, overflow: 'hidden', height: '200px', position: 'relative' }}>
            <MapMock showPin showZone zoneName="Home" height={200} />
            {/* Overlay bar */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '48px',
              background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 60%, transparent 100%)',
              display: 'flex', alignItems: 'center', padding: '0 14px',
              justifyContent: 'space-between',
            }}>
              <StatusChip variant="inside">✓ Inside: Home Zone</StatusChip>
              <span
                id="dashboard-view-map-link"
                onClick={() => navigate('/map')}
                style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-blue)', cursor: 'pointer' }}
              >
                View Live Map →
              </span>
            </div>
          </Card>

          {/* Recent alerts */}
          {unread.length > 0 && (
            <div>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.08em', marginBottom: '8px' }}>
                RECENT ALERTS
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {mockNotifications.slice(0, 2).map(n => (
                  <NotificationCard
                    key={n.id}
                    variant={n.type}
                    childName={n.childName}
                    message={n.message}
                    timestamp={n.timestamp}
                    unread={!n.read}
                    onView={() => navigate('/notifications')}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <BottomNav active="map" onNavigate={navigate} />
      </div>
    </MobileFrame>
  )
}
