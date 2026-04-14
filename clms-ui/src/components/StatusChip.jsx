const variantStyles = {
  online:  { bg: 'var(--success-bg)',      color: 'var(--success)' },
  offline: { bg: 'var(--bg-elevated)',     color: 'var(--text-secondary)' },
  inside:  { bg: 'var(--success-bg)',      color: 'var(--success)' },
  outside: { bg: 'var(--danger-bg)',       color: 'var(--danger)' },
  warning: { bg: 'var(--warning-bg)',      color: 'var(--warning)' },
  info:    { bg: 'var(--accent-blue-bg)',  color: 'var(--accent-blue)' },
}

export default function StatusChip({ variant = 'info', children }) {
  const s = variantStyles[variant] || variantStyles.info
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: s.bg,
      color: s.color,
      borderRadius: '999px',
      padding: '4px 10px',
      fontSize: '12px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  )
}
