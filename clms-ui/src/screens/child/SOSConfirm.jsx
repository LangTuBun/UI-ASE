import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'

export default function SOSConfirm() {
  const navigate = useNavigate()
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count <= 0) {
      navigate('/child/sos-sent')
      return
    }
    const timer = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [count, navigate])

  const radius = 70
  const circumference = 2 * Math.PI * radius
  // progress goes from 0 to full over 3 seconds; count goes 3→2→1→0
  const elapsed = 3 - count
  const dashOffset = circumference * (1 - elapsed / 3)

  return (
    <MobileFrame>
      <div style={{
        flex: 1,
        background: 'var(--danger-bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        gap: '0',
      }}>
        <p style={{
          fontSize: '12px', fontWeight: 600, color: 'var(--danger)',
          letterSpacing: '0.15em', marginBottom: '20px',
        }}>
          SENDING SOS
        </p>

        {/* Countdown ring */}
        <div style={{ position: 'relative', width: '160px', height: '160px', marginBottom: '24px' }}>
          <svg width="160" height="160" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
            {/* Track */}
            <circle cx="80" cy="80" r={radius} fill="none" stroke="var(--border-subtle)" strokeWidth="4" />
            {/* Progress */}
            <circle
              cx="80" cy="80" r={radius}
              fill="none"
              stroke="var(--danger)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: 'stroke-dashoffset 1s linear' }}
            />
          </svg>
          {/* Center countdown */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontSize: '48px', fontWeight: 800, color: 'var(--danger)',
              fontVariantNumeric: 'tabular-nums',
            }}>
              {Math.max(count, 0)}
            </span>
          </div>
        </div>

        <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-heading)', textAlign: 'center', marginBottom: '8px' }}>
          Keep holding to send SOS
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '32px' }}>
          Release to cancel
        </p>

        <Button
          id="sos-confirm-cancel-btn"
          variant="ghost"
          fullWidth
          style={{ borderColor: 'var(--danger)', color: 'var(--danger)' }}
          onClick={() => navigate('/child')}
        >
          Cancel
        </Button>
      </div>
    </MobileFrame>
  )
}
