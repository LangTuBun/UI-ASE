export default function MobileFrame({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-base)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 16px',
    }}>
      <div style={{
        width: '390px',
        minHeight: '844px',
        background: 'var(--bg-base)',
        border: '3px solid var(--border)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '6px 6px 0px #0D0D0D',
      }}>
        {children}
      </div>
    </div>
  )
}
