import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import StatusChip from '../../components/StatusChip'
import { mockHistory } from '../../data/mock'

const dateTabs = ['TODAY', 'YESTERDAY', 'APR 12', 'APR 11']

export default function History() {
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate()

  return (
    <MobileFrame>
      {/* Top bar */}
      <div style={{
        background: '#fff', borderBottom: '2px solid var(--border)',
        padding: '0 16px', height: '56px',
        display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <ChevronLeft size={20} style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px' }}>LOCATION HISTORY</span>
      </div>

      {/* Date chips */}
      <div style={{
        background: 'var(--bg-base)', padding: '12px 20px',
        borderBottom: '2px solid var(--border)',
        display: 'flex', gap: '8px', overflowX: 'auto',
      }}>
        {dateTabs.map((tab, i) => (
          <button key={tab} onClick={() => setActiveTab(i)} style={{
            padding: '4px 12px',
            background: i === activeTab ? 'var(--slab-blue)' : '#fff',
            color: i === activeTab ? '#fff' : 'var(--text-primary)',
            border: '2px solid var(--border)',
            fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.06em', cursor: 'pointer', whiteSpace: 'nowrap',
            fontFamily: 'var(--font-body)',
          }}>
            {tab}
          </button>
        ))}
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
        {mockHistory.map(group => (
          <div key={group.date}>
            <div style={{
              fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
              color: 'var(--text-muted)', letterSpacing: '0.06em',
              borderBottom: '2px solid var(--border)',
              padding: '12px 0 8px', fontFamily: 'var(--font-body)',
            }}>
              {group.date}
            </div>
            {group.entries.map((entry, i) => (
              <div key={i} style={{
                display: 'flex', gap: '0', padding: '16px 0',
                borderBottom: '2px solid var(--border)',
                alignItems: 'flex-start',
              }}>
                <div style={{ width: '52px', flexShrink: 0 }}>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{entry.time}</span>
                </div>
                <div style={{ width: '20px', flexShrink: 0, display: 'flex', justifyContent: 'center', paddingTop: '4px' }}>
                  <div style={{ width: '2px', background: '#C0BAB0', height: '100%', borderLeft: '2px dashed #C0BAB0' }} />
                </div>
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-body)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {entry.address}
                  </div>
                  <div style={{ marginTop: '4px' }}>
                    <StatusChip label={entry.duration} variant="white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <BottomNav active="history" />
    </MobileFrame>
  )
}
