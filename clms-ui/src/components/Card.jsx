export default function Card({ children, className = '', onClick, style = {} }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  )
}
