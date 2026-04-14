import { WifiOff } from 'lucide-react'

export default function OfflineBanner({ onRetry }) {
  return (
    <div style={{
      height: '44px',
      background: 'var(--warning-bg)',
      borderBottom: '1px solid var(--warning)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      gap: '8px',
      flexShrink: 0,
    }}>
      <WifiOff size={16} color="var(--warning)" />
      <span style={{ flex: 1, fontSize: '13px', fontWeight: 500, color: 'var(--warning)' }}>
        No internet connection
      </span>
      <button
        id="offline-retry-btn"
        onClick={onRetry}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--warning)',
          cursor: 'pointer',
          textDecoration: 'underline',
          padding: 0,
        }}
      >
        Retry
      </button>
    </div>
  )
}
