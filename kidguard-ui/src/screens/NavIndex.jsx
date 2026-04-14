import { useNavigate } from 'react-router-dom'
import StatusChip from '../components/StatusChip'

const screens = [
  { code: 'P1',  name: 'Splash',         path: '/',                  role: 'parent' },
  { code: 'P2',  name: 'Register',        path: '/register',          role: 'parent' },
  { code: 'P3',  name: 'Login',           path: '/login',             role: 'parent' },
  { code: 'P4',  name: 'MFA Verify',      path: '/mfa',               role: 'parent' },
  { code: 'P5',  name: 'Dashboard',       path: '/dashboard',         role: 'parent' },
  { code: 'P6',  name: 'Live Map',        path: '/map',               role: 'parent' },
  { code: 'P7',  name: 'History',         path: '/history',           role: 'parent' },
  { code: 'P8',  name: 'Safe Zones',      path: '/zones',             role: 'parent' },
  { code: 'P9',  name: 'Add Zone',        path: '/zones/add',         role: 'parent' },
  { code: 'P10', name: 'Notifications',   path: '/notifications',     role: 'parent' },
  { code: 'P11', name: 'SOS Alert',       path: '/sos-alert',         role: 'parent' },
  { code: 'P12', name: 'Child Profile',   path: '/child-profile',     role: 'parent' },
  { code: 'P13', name: 'Settings',        path: '/settings',          role: 'parent' },
  { code: 'P14', name: 'Offline',         path: '/offline',           role: 'parent' },
  { code: 'C1',  name: 'Child Login',     path: '/child/login',       role: 'child' },
  { code: 'C2',  name: 'Child Home',      path: '/child',             role: 'child' },
  { code: 'C3',  name: 'SOS Confirm',     path: '/child/sos-confirm', role: 'child' },
  { code: 'C4',  name: 'SOS Sent',        path: '/child/sos-sent',    role: 'child' },
  { code: 'C5',  name: 'SOS Queued',      path: '/child/sos-queued',  role: 'child' },
]

export default function NavIndex() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)', padding: '32px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '32px', margin: '0 0 8px' }}>
            <span style={{ background: 'var(--slab-blue)', color: '#fff', padding: '2px 12px' }}>KIDGUARD</span>
            {' '}SCREENS
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', margin: 0 }}>
            19 screens · 2 roles · Click any card to navigate
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {screens.map(s => (
            <div
              key={s.code}
              onClick={() => navigate(s.path)}
              style={{
                background: '#fff', border: '2px solid var(--border)',
                boxShadow: '3px 3px 0 #0D0D0D', padding: '20px',
                cursor: 'pointer', transition: 'transform 0.1s, box-shadow 0.1s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)'
                e.currentTarget.style.boxShadow = '5px 5px 0 #0D0D0D'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translate(0,0)'
                e.currentTarget.style.boxShadow = '3px 3px 0 #0D0D0D'
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '32px', color: '#D4CFC6', lineHeight: 1 }}>
                {s.code}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-body)', margin: '6px 0 8px' }}>
                {s.name}
              </div>
              <StatusChip label={s.role.toUpperCase()} variant={s.role === 'parent' ? 'info' : 'online'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
