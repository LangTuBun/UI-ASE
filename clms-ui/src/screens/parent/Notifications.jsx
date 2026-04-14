import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import NotificationCard from '../../components/NotificationCard'
import { mockNotifications } from '../../data/mock'

const TABS = ['All', 'Geofence', 'SOS']

export default function Notifications() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('All')
  const unreadCount = mockNotifications.filter(n => !n.read).length

  const filtered = mockNotifications.filter(n => {
    if (activeTab === 'All') return true
    if (activeTab === 'SOS') return n.type === 'sos'
    return n.type === 'geofence'
  })

  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{
          padding: '20px 20px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-heading)' }}>Alerts</h1>
          {unreadCount > 0 && (
            <span style={{
              background: 'var(--danger)', color: '#fff',
              borderRadius: '999px', padding: '4px 10px',
              fontSize: '13px', fontWeight: 700,
            }}>{unreadCount}</span>
          )}
        </div>

        {/* Segmented control */}
        <div style={{ display: 'flex', padding: '16px 20px 12px', gap: '6px', flexShrink: 0 }}>
          {TABS.map(t => (
            <button
              key={t}
              id={`notif-tab-${t.toLowerCase()}`}
              onClick={() => setActiveTab(t)}
              style={{
                padding: '7px 16px',
                borderRadius: '999px',
                border: '1px solid',
                borderColor: activeTab === t ? 'var(--accent-blue)' : 'var(--border-subtle)',
                background: activeTab === t ? 'var(--accent-blue)' : '#fff',
                color: activeTab === t ? '#fff' : 'var(--text-secondary)',
                fontSize: '13px', fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >{t}</button>
          ))}
        </div>

        {/* Notification list */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '12px' }}>
          {filtered.map(n => (
            <NotificationCard
              key={n.id}
              variant={n.type}
              childName={n.childName}
              message={n.message}
              timestamp={n.timestamp}
              unread={!n.read}
              onView={() => n.type === 'sos' && navigate('/sos-alert')}
            />
          ))}
        </div>

        <BottomNav active="alerts" onNavigate={navigate} />
      </div>
    </MobileFrame>
  )
}
