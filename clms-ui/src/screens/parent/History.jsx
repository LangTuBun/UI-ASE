import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, SlidersHorizontal } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import { mockHistory } from '../../data/mock'

const dateTabs = ['Today', 'Yesterday', 'Apr 12', 'Apr 11']

export default function History() {
  const navigate = useNavigate()
  const [activeDate, setActiveDate] = useState('Today')

  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{
          height: '56px', padding: '0 20px',
          display: 'flex', alignItems: 'center', gap: '12px',
          borderBottom: '1px solid var(--border-subtle)', flexShrink: 0,
        }}>
          <button id="history-back-btn" onClick={() => navigate(-1)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: '4px' }}>
            <ArrowLeft size={20} color="var(--text-body)" />
          </button>
          <p style={{ flex: 1, fontSize: '20px', fontWeight: 700, color: 'var(--text-heading)' }}>Location History</p>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: '4px' }}>
            <SlidersHorizontal size={18} color="var(--text-secondary)" />
          </button>
        </div>

        {/* Date chips */}
        <div className="no-scrollbar" style={{
          display: 'flex', gap: '8px', padding: '12px 20px',
          overflowX: 'auto', flexShrink: 0,
          borderBottom: '1px solid var(--border-subtle)',
        }}>
          {dateTabs.map(d => (
            <button
              key={d}
              id={`history-tab-${d.toLowerCase().replace(/\s/g,'-')}`}
              onClick={() => setActiveDate(d)}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                border: '1px solid',
                borderColor: activeDate === d ? 'var(--accent-blue)' : 'var(--border-subtle)',
                background: activeDate === d ? 'var(--accent-blue)' : '#fff',
                color: activeDate === d ? '#fff' : 'var(--text-secondary)',
                fontSize: '13px', fontWeight: 500,
                cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'all 0.15s',
              }}
            >{d}</button>
          ))}
        </div>

        {/* History list */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
          {mockHistory.map(group => (
            <div key={group.date}>
              <p style={{
                fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)',
                padding: '16px 0 8px',
              }}>{group.date}</p>
              {group.entries.map((entry, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '12px',
                  padding: '14px 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  alignItems: 'flex-start',
                }}>
                  {/* Time col */}
                  <div style={{ width: '48px', flexShrink: 0 }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>
                      {entry.time}
                    </span>
                  </div>

                  {/* Dot + line */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)', flexShrink: 0 }} />
                    {i < group.entries.length - 1 && (
                      <div style={{ width: '1px', flex: 1, minHeight: '24px', background: 'var(--border-subtle)', marginTop: '4px' }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontSize: '14px', fontWeight: 600, color: 'var(--text-heading)',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      marginBottom: '4px',
                    }}>{entry.address}</p>
                    <span style={{
                      display: 'inline-block',
                      background: 'var(--bg-elevated)',
                      borderRadius: '6px',
                      padding: '2px 8px',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                    }}>{entry.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <BottomNav active="history" onNavigate={navigate} />
      </div>
    </MobileFrame>
  )
}
