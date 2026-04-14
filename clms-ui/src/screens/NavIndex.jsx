import { useNavigate } from 'react-router-dom'

const screens = [
  { id: 'P1',  name: 'Splash',             route: '/',                  role: 'Parent' },
  { id: 'P2',  name: 'Register',           route: '/register',          role: 'Parent' },
  { id: 'P3',  name: 'Login',              route: '/login',             role: 'Parent' },
  { id: 'P4',  name: 'MFA Verification',   route: '/mfa',               role: 'Parent' },
  { id: 'P5',  name: 'Home Dashboard',     route: '/dashboard',         role: 'Parent' },
  { id: 'P6',  name: 'Live Map',           route: '/map',               role: 'Parent' },
  { id: 'P7',  name: 'Location History',   route: '/history',           role: 'Parent' },
  { id: 'P8',  name: 'Safe Zones',         route: '/zones',             role: 'Parent' },
  { id: 'P9',  name: 'Add Safe Zone',      route: '/zones/add',         role: 'Parent' },
  { id: 'P10', name: 'Notifications',      route: '/notifications',     role: 'Parent' },
  { id: 'P11', name: 'SOS Alert Modal',    route: '/sos-alert',         role: 'Parent' },
  { id: 'P12', name: 'Child Profile',      route: '/child-profile',     role: 'Parent' },
  { id: 'P13', name: 'Account Settings',   route: '/settings',          role: 'Parent' },
  { id: 'P14', name: 'Offline State',      route: '/offline',           role: 'Parent' },
  { id: 'C1',  name: 'Child Login',        route: '/child/login',       role: 'Child' },
  { id: 'C2',  name: 'Child Home (SOS)',   route: '/child',             role: 'Child' },
  { id: 'C3',  name: 'SOS Confirmation',   route: '/child/sos-confirm', role: 'Child' },
  { id: 'C4',  name: 'SOS Sent',           route: '/child/sos-sent',    role: 'Child' },
  { id: 'C5',  name: 'SOS Queued',         route: '/child/sos-queued',  role: 'Child' },
]

export default function NavIndex() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F7F8FA',
      padding: '48px 32px',
      fontFamily: 'DM Sans, sans-serif',
    }}>
      {/* Header */}
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '8px' }}>
          <span style={{
            fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)',
            letterSpacing: '0.12em',
          }}>CLMS UI PROTOTYPE</span>
        </div>
        <h1 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '8px' }}>
          Screen Index
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '40px' }}>
          19 screens across Parent + Child flows. Click any card to navigate.
        </p>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '16px',
        }}>
          {screens.map(s => (
            <div
              key={s.id}
              id={`nav-card-${s.id.toLowerCase()}`}
              onClick={() => navigate(s.route)}
              style={{
                background: '#fff',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '20px 24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                transition: 'border-color 0.15s, box-shadow 0.15s, transform 0.1s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = s.role === 'Child' ? 'var(--danger)' : 'var(--accent-blue)'
                e.currentTarget.style.boxShadow = `0 4px 16px ${s.role === 'Child' ? 'rgba(220,38,38,0.1)' : 'rgba(37,99,235,0.1)'}`
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* ID badge */}
              <span style={{
                fontSize: '28px',
                fontWeight: 800,
                color: 'var(--bg-elevated)',
                minWidth: '52px',
                textAlign: 'right',
                lineHeight: 1,
                letterSpacing: '-1px',
                WebkitTextStroke: `1.5px ${s.role === 'Child' ? 'rgba(220,38,38,0.3)' : 'rgba(37,99,235,0.25)'}`,
              }}>{s.id}</span>

              {/* Screen info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '4px' }}>
                  {s.name}
                </p>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>
                  {s.route}
                </p>
              </div>

              {/* Role chip */}
              <span style={{
                padding: '4px 10px',
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 600,
                background: s.role === 'Child' ? 'var(--danger-bg)' : 'var(--accent-blue-bg)',
                color: s.role === 'Child' ? 'var(--danger)' : 'var(--accent-blue)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}>
                {s.role}
              </span>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '40px' }}>
          CO3065 Advanced Software Engineering — CC01, Group 1, Semester 252, HCMUT
        </p>
      </div>
    </div>
  )
}
