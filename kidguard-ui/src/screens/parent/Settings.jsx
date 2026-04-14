import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import Card from '../../components/Card'
import StatusChip from '../../components/StatusChip'
import { mockParent } from '../../data/mock'

const settingsRows = [
  { label: 'CHANGE PASSWORD', right: null },
  { label: 'MULTI-FACTOR AUTH', right: <StatusChip label="ON" variant="online" /> },
  { label: 'NOTIFICATION PREFERENCES', right: null },
  { label: 'HELP & SUPPORT', right: null },
]

export default function Settings() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      {/* Top bar */}
      <div style={{
        background: '#fff', borderBottom: '2px solid var(--border)',
        padding: '0 20px', height: '56px',
        display: 'flex', alignItems: 'center',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px' }}>SETTINGS</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Profile card */}
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '48px', height: '48px', border: '2px solid var(--border)',
              background: 'var(--bg-base)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', fontWeight: 700, flexShrink: 0,
            }}>MK</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-body)' }}>{mockParent.name}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{mockParent.email}</div>
            </div>
          </div>
        </Card>

        {/* Settings rows */}
        <Card padding="0">
          {settingsRows.map((row, i) => (
            <div key={row.label} style={{
              padding: '0 20px', height: '52px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              borderBottom: i < settingsRows.length - 1 ? '2px solid var(--border)' : 'none',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: 'var(--font-body)' }}>
                {row.label}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {row.right}
                <ChevronRight size={16} color="var(--text-muted)" />
              </div>
            </div>
          ))}
        </Card>

        <button
          onClick={() => navigate('/')}
          style={{
            border: '2px solid var(--slab-red)', background: 'transparent',
            color: 'var(--slab-red)', padding: '12px', width: '100%',
            fontSize: '13px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.08em', cursor: 'pointer', fontFamily: 'var(--font-body)',
          }}>
          LOG OUT
        </button>
      </div>

      <BottomNav active="map" />
    </MobileFrame>
  )
}
