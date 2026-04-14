export default function MapMock({ showPin = true, showZone = false, zoneName = 'Home', height = 200, style: extraStyle = {} }) {
  return (
    <div style={{
      width: '100%',
      height: height === '100%' ? '100%' : `${height}px`,
      background: '#F1F5F3',
      position: 'relative',
      overflow: 'hidden',
      ...extraStyle,
    }}>
      {/* Road grid SVG */}
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', inset: 0 }}
        preserveAspectRatio="none"
      >
        {/* Horizontal roads */}
        {[15, 30, 45, 60, 75].map(y => (
          <rect key={`h${y}`} x="0" y={`${y}%`} width="100%" height="6" fill="#E2E8E4" rx="2" />
        ))}
        {/* Vertical roads */}
        {[15, 30, 50, 65, 80].map(x => (
          <rect key={`v${x}`} x={`${x}%`} y="0" width="6" height="100%" fill="#E2E8E4" rx="2" />
        ))}
        {/* Blocks */}
        {[
          [5, 5, 24, 23], [35, 5, 28, 23], [68, 5, 26, 23],
          [5, 33, 24, 25], [35, 33, 28, 25], [68, 33, 26, 25],
          [5, 62, 24, 32], [35, 62, 28, 32], [68, 62, 26, 32],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={`${x}%`} y={`${y}%`} width={`${w}%`} height={`${h}%`} fill="#E8EDE9" rx="3" />
        ))}
      </svg>

      {/* Safe zone circle */}
      {showZone && (
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'rgba(37,99,235,0.12)',
          border: '2px solid rgba(37,99,235,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            background: 'rgba(37,99,235,0.9)',
            color: '#fff',
            borderRadius: '999px',
            padding: '3px 10px',
            fontSize: '11px',
            fontWeight: 600,
            position: 'absolute',
            top: '-14px',
          }}>{zoneName}</span>
        </div>
      )}

      {/* Child location pin with pulse */}
      {showPin && (
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          {/* Pulse ring */}
          <div className="map-pulse" style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(37,99,235,0.18)',
            border: '2px solid rgba(37,99,235,0.4)',
          }} />
          {/* Blue dot */}
          <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: 'var(--accent-blue)',
            border: '3px solid #fff',
            boxShadow: '0 2px 8px rgba(37,99,235,0.5)',
            position: 'relative',
            zIndex: 2,
          }} />
        </div>
      )}

      {/* Compass */}
      <div style={{
        position: 'absolute',
        top: 8,
        right: 8,
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.9)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
      }}>N</div>
    </div>
  )
}
