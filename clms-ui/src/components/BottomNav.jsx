import { MapPin, Clock, Shield, Bell } from 'lucide-react'

const tabs = [
  { key: 'map',     label: 'Map',        Icon: MapPin,  route: '/map' },
  { key: 'history', label: 'History',    Icon: Clock,   route: '/history' },
  { key: 'zones',   label: 'Safe Zones', Icon: Shield,  route: '/zones' },
  { key: 'alerts',  label: 'Alerts',     Icon: Bell,    route: '/notifications' },
]

export default function BottomNav({ active, onNavigate }) {
  return (
    <div style={{
      height: '64px',
      background: '#fff',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
    }}>
      {tabs.map(({ key, label, Icon, route }) => {
        const isActive = active === key
        return (
          <button
            key={key}
            id={`nav-${key}`}
            onClick={() => onNavigate && onNavigate(route)}
            style={{
              flex: 1,
              height: '100%',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              color: isActive ? 'var(--accent-blue)' : 'var(--text-disabled)',
              transition: 'color 0.15s',
            }}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
            <span style={{ fontSize: '10px', fontWeight: isActive ? 600 : 400 }}>{label}</span>
          </button>
        )
      })}
    </div>
  )
}
