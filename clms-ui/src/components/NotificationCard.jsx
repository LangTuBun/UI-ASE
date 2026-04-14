import { MapPin, AlertTriangle } from 'lucide-react'

export default function NotificationCard({ variant = 'geofence', childName, message, timestamp, onView, unread }) {
  const isSOS = variant === 'sos'

  return (
    <div
      onClick={onView}
      style={{
        background: isSOS ? 'var(--danger-bg)' : (unread ? 'var(--bg-elevated)' : '#fff'),
        border: '1px solid var(--border-subtle)',
        borderLeft: `3px solid ${isSOS ? 'var(--danger)' : 'var(--accent-blue)'}`,
        borderRadius: '12px',
        padding: '14px 16px',
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start',
        cursor: onView ? 'pointer' : 'default',
      }}
    >
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: isSOS ? 'rgba(220,38,38,0.1)' : 'var(--accent-blue-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {isSOS
          ? <AlertTriangle size={16} color="var(--danger)" />
          : <MapPin size={16} color="var(--accent-blue)" />
        }
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontSize: '14px',
          fontWeight: isSOS ? 700 : 600,
          color: isSOS ? 'var(--danger)' : 'var(--text-heading)',
          marginBottom: '2px',
        }}>
          {childName} {message}
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>
          {timestamp}
        </p>
      </div>
      {unread && (
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: isSOS ? 'var(--danger)' : 'var(--accent-blue)',
          flexShrink: 0,
          marginTop: '6px',
        }} />
      )}
    </div>
  )
}
