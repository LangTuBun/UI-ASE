import { useNavigate } from 'react-router-dom'
import MobileFrame from '../../components/MobileFrame'
import StatusChip from '../../components/StatusChip'
import Card from '../../components/Card'
import { mockParent } from '../../data/mock'

export default function ChildHome() {
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        overflow: 'hidden',
      }}>
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'auto', flexShrink: 0 }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>CLMS</span>
          <StatusChip variant="online">✓ You're safe</StatusChip>
        </div>

        {/* Center content */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
        }}>
          {/* Status bubble */}
          <Card style={{
            background: 'var(--success-bg)',
            border: '1px solid var(--success)',
            padding: '20px',
            textAlign: 'center',
            borderRadius: '12px',
            width: '100%',
            marginBottom: '32px',
          }}>
            <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--success)', marginBottom: '6px' }}>
              📍 Sharing location with
            </p>
            <p style={{ fontSize: '28px', fontWeight: 800, color: 'var(--success)', marginBottom: '4px' }}>
              Mum
            </p>
            <p style={{ fontSize: '12px', color: 'var(--success)', opacity: 0.8 }}>
              {mockParent.name}
            </p>
          </Card>

          {/* SOS section label */}
          <p style={{
            fontSize: '11px', fontWeight: 600,
            color: 'var(--text-secondary)',
            letterSpacing: '0.1em',
            textAlign: 'center',
            marginBottom: '16px',
          }}>NEED HELP?</p>

          {/* SOS Button */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
            {/* Pulse ring */}
            <div className="sos-pulse-ring" style={{
              position: 'absolute',
              width: '156px',
              height: '156px',
              borderRadius: '50%',
              border: '2px solid var(--danger)',
              pointerEvents: 'none',
            }} />
            {/* SOS circle button */}
            <button
              id="child-sos-btn"
              onClick={() => navigate('/child/sos-confirm')}
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'var(--danger)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(220,38,38,0.45)',
                transition: 'transform 0.1s, box-shadow 0.15s',
                position: 'relative',
                zIndex: 1,
              }}
              onMouseDown={e => {
                e.currentTarget.style.transform = 'scale(0.95)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(220,38,38,0.4)'
              }}
              onMouseUp={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(220,38,38,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(220,38,38,0.45)'
              }}
            >
              <span style={{ fontSize: '28px', fontWeight: 800, color: '#fff', letterSpacing: '0.05em' }}>SOS</span>
            </button>
          </div>

          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', textAlign: 'center' }}>
            Hold to send emergency alert
          </p>
        </div>
      </div>
    </MobileFrame>
  )
}
