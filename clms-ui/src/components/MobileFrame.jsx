export default function MobileFrame({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#E5E7EB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{
        width: '390px',
        minHeight: '844px',
        background: '#FFFFFF',
        borderRadius: '40px',
        boxShadow: '0 40px 80px rgba(0,0,0,0.20), 0 0 0 1px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {children}
      </div>
    </div>
  )
}
