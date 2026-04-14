import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import Button from '../../components/Button'
import StatusChip from '../../components/StatusChip'
import Card from '../../components/Card'
import { mockParent } from '../../data/mock'

const settingsRows = [
  { label: 'Change Password', right: null },
  { label: 'Multi-Factor Auth', right: 'status' },
  { label: 'Notification Preferences', right: null },
  { label: 'Help & Support', right: null },
]

export default function Settings() {
  const navigate = useNavigate()

  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ padding: '20px 20px 0', flexShrink: 0 }}>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-heading)' }}>Settings</h1>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Profile card */}
          <Card style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: 'var(--accent-blue-bg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '20px', fontWeight: 700, color: 'var(--accent-blue)',
              flexShrink: 0,
            }}>N</div>
            <div>
              <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '2px' }}>
                {mockParent.name}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{mockParent.email}</p>
            </div>
          </Card>

          {/* Settings list */}
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            {settingsRows.map((row, i) => (
              <div
                key={row.label}
                id={`settings-row-${i}`}
                style={{
                  height: '52px',
                  padding: '0 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: i < settingsRows.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  cursor: 'pointer',
                  transition: 'background 0.1s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-elevated)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{ fontSize: '14px', color: 'var(--text-body)' }}>{row.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {row.right === 'status' && <StatusChip variant="online">ON</StatusChip>}
                  <ChevronRight size={16} color="var(--text-disabled)" />
                </div>
              </div>
            ))}
          </Card>

          <Button id="settings-logout-btn" variant="ghost" fullWidth style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}
            onClick={() => navigate('/')}>
            Log Out
          </Button>
        </div>

        <BottomNav active="map" onNavigate={navigate} />
      </div>
    </MobileFrame>
  )
}
