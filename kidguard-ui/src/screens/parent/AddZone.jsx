import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import MapMock from '../../components/MapMock'
import Input from '../../components/Input'
import Button from '../../components/Button'

const swatchColors = ['#2A5BF5', '#E8631A', '#1A8C4E', '#D92B2B']

export default function AddZone() {
  const navigate = useNavigate()
  const [radius, setRadius] = useState(200)
  const [selectedColor, setSelectedColor] = useState(0)

  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Map top half */}
        <div style={{ height: '50%', position: 'relative' }}>
          <MapMock height="100%" showZone />
          {/* Floating top bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            background: '#fff', borderBottom: '2px solid var(--border)',
            height: '56px', padding: '0 16px',
            display: 'flex', alignItems: 'center', gap: '12px', zIndex: 10,
          }}>
            <ChevronLeft size={20} style={{ cursor: 'pointer' }} onClick={() => navigate('/zones')} />
            <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-body)' }}>
              ADD SAFE ZONE
            </span>
          </div>
          {/* Crosshair */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px', color: 'var(--text-muted)', zIndex: 5,
          }}>+</div>
        </div>

        {/* Bottom sheet */}
        <div style={{
          flex: 1, background: '#fff',
          borderTop: '2px solid var(--border)',
          boxShadow: '0 -3px 0 #0D0D0D',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px',
          overflowY: 'auto',
        }}>
          <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
            ZONE DETAILS
          </span>
          <Input label="Zone Name" placeholder="e.g. Home, School" />

          {/* Radius */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>RADIUS</span>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)' }}>{radius}M</span>
            </div>
            <input type="range" min={50} max={1000} step={50} value={radius}
              onChange={e => setRadius(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--slab-blue)' }} />
          </div>

          {/* Color */}
          <div>
            <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', fontFamily: 'var(--font-body)', display: 'block', marginBottom: '8px' }}>COLOR</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              {swatchColors.map((c, i) => (
                <div key={c} onClick={() => setSelectedColor(i)} style={{
                  width: '28px', height: '28px', background: c,
                  border: '2px solid var(--border)',
                  outline: selectedColor === i ? `3px solid var(--slab-blue)` : 'none',
                  outlineOffset: '2px', cursor: 'pointer',
                }} />
              ))}
            </div>
          </div>

          <Button fullWidth variant="primary" onClick={() => navigate('/zones')}>SAVE ZONE →</Button>
          <Button fullWidth variant="ghost" onClick={() => navigate('/zones')}>CANCEL</Button>
        </div>
      </div>
    </MobileFrame>
  )
}
