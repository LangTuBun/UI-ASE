import { useState } from 'react'

export default function ZoneCard({ name, type, radius, active: initialActive, onToggle }) {
  const [active, setActive] = useState(initialActive)

  const handleToggle = () => {
    setActive(prev => !prev)
    onToggle && onToggle(!active)
  }

  return (
    <div style={{
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '12px',
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      {/* Color dot */}
      <div style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        flexShrink: 0,
        background: active ? 'var(--accent-blue)' : 'var(--border-strong)',
      }} />

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '2px' }}>
          {name}
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>
          {type} · {radius}
        </p>
      </div>

      {/* Toggle */}
      <button
        id={`zone-toggle-${name.toLowerCase().replace(/\s/g,'-')}`}
        onClick={handleToggle}
        role="switch"
        aria-checked={active}
        style={{
          width: '44px',
          height: '24px',
          borderRadius: '999px',
          border: 'none',
          background: active ? 'var(--accent-blue)' : 'var(--border-strong)',
          cursor: 'pointer',
          position: 'relative',
          transition: 'background 0.2s',
          flexShrink: 0,
        }}
      >
        <div style={{
          position: 'absolute',
          top: '3px',
          left: active ? '23px' : '3px',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
          transition: 'left 0.2s',
        }} />
      </button>
    </div>
  )
}
