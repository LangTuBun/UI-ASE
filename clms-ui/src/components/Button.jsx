const styles = {
  primary: {
    background: 'var(--accent-cta)',
    color: '#fff',
    border: 'none',
  },
  blue: {
    background: 'var(--accent-blue)',
    color: '#fff',
    border: 'none',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid var(--border-strong)',
  },
  danger: {
    background: 'var(--danger)',
    color: '#fff',
    border: 'none',
  },
  'ghost-danger': {
    background: 'transparent',
    color: 'var(--danger)',
    border: '1px solid var(--danger)',
  },
  disabled: {
    background: 'var(--bg-elevated)',
    color: 'var(--text-disabled)',
    border: 'none',
    cursor: 'not-allowed',
  },
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  fullWidth = false,
  size = 'md',
  style: extraStyle = {},
  type = 'button',
}) {
  const height = size === 'sm' ? '36px' : '44px'
  const fontSize = '14px'

  return (
    <button
      type={type}
      onClick={variant === 'disabled' ? undefined : onClick}
      disabled={variant === 'disabled'}
      style={{
        height,
        width: fullWidth ? '100%' : 'auto',
        padding: '0 20px',
        borderRadius: '8px',
        fontSize,
        fontWeight: 600,
        fontFamily: 'DM Sans, sans-serif',
        cursor: variant === 'disabled' ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        transition: 'opacity 0.15s, transform 0.1s',
        ...styles[variant],
        ...extraStyle,
      }}
      onMouseEnter={e => { if (variant !== 'disabled') e.currentTarget.style.opacity = '0.88' }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      onMouseDown={e => { if (variant !== 'disabled') e.currentTarget.style.transform = 'scale(0.98)' }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
    >
      {children}
    </button>
  )
}
