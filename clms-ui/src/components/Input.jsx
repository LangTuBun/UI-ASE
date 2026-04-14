import { useState } from 'react'

export default function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  id,
}) {
  const [focused, setFocused] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--text-secondary)',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          height: '44px',
          borderRadius: '8px',
          background: 'var(--bg-elevated)',
          border: error
            ? '2px solid var(--danger)'
            : focused
            ? '2px solid var(--accent-blue)'
            : '1px solid var(--border-subtle)',
          padding: '0 14px',
          fontSize: '14px',
          fontFamily: 'DM Sans, sans-serif',
          color: 'var(--text-body)',
          outline: 'none',
          width: '100%',
          transition: 'border 0.15s',
        }}
      />
      {error && (
        <span style={{ fontSize: '12px', color: 'var(--danger)' }}>{error}</span>
      )}
    </div>
  )
}
