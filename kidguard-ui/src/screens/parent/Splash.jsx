import { useNavigate } from 'react-router-dom'
import { Asterisk } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import Button from '../../components/Button'

export default function Splash() {
  const navigate = useNavigate()
  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Top bar */}
        <div style={{
          border: '2px solid var(--border)', margin: '20px 20px 0',
          padding: '10px 16px', background: '#fff',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <Asterisk size={16} />
          <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
            KidGuard
          </span>
        </div>

        {/* Center block */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '0 24px', gap: '20px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '8px' }}>
              ALWAYS KNOW
            </div>
            <div>
              <span style={{
                background: 'var(--slab-orange)', color: '#fff',
                padding: '2px 10px', display: 'inline',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '36px', lineHeight: 1.2,
              }}>
                WHERE THEY ARE.
              </span>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', textAlign: 'center', maxWidth: '260px', fontFamily: 'var(--font-body)', margin: 0 }}>
            Real-time location monitoring for parents who care.
          </p>
        </div>

        {/* Buttons */}
        <div style={{ padding: '0 24px 40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button fullWidth variant="primary" onClick={() => navigate('/register')}>GET STARTED →</Button>
          <Button fullWidth variant="ghost" onClick={() => navigate('/login')}>SIGN IN</Button>
        </div>

        {/* Corner decorations */}
        <div style={{ position: 'absolute', bottom: '100px', right: '28px', width: '24px', height: '24px', background: 'var(--slab-orange)' }} />
        <div style={{ position: 'absolute', bottom: '130px', right: '60px', width: '16px', height: '16px', background: 'var(--slab-blue)' }} />
      </div>
    </MobileFrame>
  )
}
