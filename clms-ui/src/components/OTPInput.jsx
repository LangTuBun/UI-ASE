import { useRef } from 'react'

export default function OTPInput({ value, onChange }) {
  const refs = useRef([])

  const handleChange = (i, e) => {
    const digit = e.target.value.replace(/\D/g, '').slice(-1)
    const next = [...value]
    next[i] = digit
    onChange(next)
    if (digit && i < 5) {
      refs.current[i + 1]?.focus()
    }
  }

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !value[i] && i > 0) {
      refs.current[i - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const next = [...value]
    pasted.split('').forEach((ch, i) => { next[i] = ch })
    onChange(next)
    refs.current[Math.min(pasted.length, 5)]?.focus()
  }

  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
      {value.map((digit, i) => (
        <input
          key={i}
          id={`otp-${i}`}
          ref={el => refs.current[i] = el}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={e => handleChange(i, e)}
          onKeyDown={e => handleKeyDown(i, e)}
          onPaste={handlePaste}
          style={{
            width: '48px',
            height: '56px',
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 700,
            fontFamily: 'DM Sans, sans-serif',
            borderRadius: '8px',
            border: digit ? '2px solid var(--accent-blue)' : '1px solid var(--border-strong)',
            background: digit ? 'var(--accent-blue-bg)' : 'var(--bg-elevated)',
            color: 'var(--text-heading)',
            outline: 'none',
            transition: 'border 0.15s, background 0.15s',
          }}
        />
      ))}
    </div>
  )
}
