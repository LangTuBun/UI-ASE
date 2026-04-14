import { useNavigate } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import MapMock from '../../components/MapMock'
import Button from '../../components/Button'

export default function SOSModal() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      {/* Red header */}
      <div style={{
        background: 'var(--slab-red)', height: '88px',
        borderBottom: '2px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
      }}>
        <AlertTriangle size={32} color="#fff" />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px', color: '#fff', textTransform: 'uppercase' }}>
          SOS ALERT
        </span>
      </div>

      {/* Body */}
      <div style={{ flex: 1, background: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
        {/* Child info row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '64px', height: '64px', border: '2px solid var(--border)',
            background: 'var(--slab-red)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '28px', fontWeight: 700, color: '#fff', flexShrink: 0,
          }}>B</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px' }}>
              <span style={{ background: 'var(--slab-red)', color: '#fff', padding: '2px 8px' }}>BON</span>
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', marginTop: '4px' }}>
              sent an emergency alert
            </div>
          </div>
        </div>

        <MapMock showPin height={180} />
        <div style={{ fontSize: '14px', fontFamily: 'var(--font-body)' }}>
          123 Nguyen Hue Blvd, District 1, Ho Chi Minh City
        </div>
        <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
          TODAY AT 14:32
        </div>

        <Button fullWidth variant="dark">CALL BON →</Button>
        <Button fullWidth variant="ghost" onClick={() => navigate('/dashboard')}>DISMISS ALERT</Button>
        <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', fontFamily: 'var(--font-body)', margin: 0 }}>
          If unresolved, you will be re-notified in 5 minutes.
        </p>
      </div>
    </MobileFrame>
  )
}
