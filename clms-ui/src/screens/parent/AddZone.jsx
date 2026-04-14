import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Crosshair } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import MapMock from '../../components/MapMock'
import Button from '../../components/Button'
import Input from '../../components/Input'

const COLORS = ['#2563EB', '#16A34A', '#D97706', '#DC2626']

export default function AddZone() {
  const navigate = useNavigate()
  const [zoneName, setZoneName] = useState('Home')
  const [radius, setRadius] = useState(200)
  const [selectedColor, setSelectedColor] = useState('#2563EB')

  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Map top 55% */}
        <div style={{ height: '55%', position: 'relative', flexShrink: 0 }}>
          <MapMock showPin={false} showZone zoneName={zoneName} height="100%" />

          {/* Floating top bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: '56px', background: 'rgba(255,255,255,0.95)',
            display: 'flex', alignItems: 'center', padding: '0 16px', gap: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            <button
              id="addzone-back-btn"
              onClick={() => navigate('/zones')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}
            >
              <ArrowLeft size={20} color="var(--text-body)" />
            </button>
            <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-heading)' }}>Add Safe Zone</p>
          </div>

          {/* Crosshair */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 5 }}>
            <Crosshair size={20} color="#9CA3AF" strokeWidth={1.5} />
          </div>
        </div>

        {/* Bottom sheet 45% */}
        <div style={{
          flex: 1,
          background: '#fff',
          borderRadius: '20px 20px 0 0',
          padding: '20px',
          display: 'flex', flexDirection: 'column', gap: '16px',
          overflowY: 'auto',
          boxShadow: '0 -8px 24px rgba(0,0,0,0.08)',
        }}>
          <Input id="addzone-name" label="Zone Name" value={zoneName} onChange={e => setZoneName(e.target.value)} />

          {/* Radius */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-body)' }}>Radius</span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>{radius}m</span>
            </div>
            <input
              id="addzone-radius-slider"
              type="range" min={50} max={1000} step={50}
              value={radius}
              onChange={e => setRadius(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-blue)' }}
            />
          </div>

          {/* Color swatches */}
          <div>
            <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-body)', marginBottom: '10px' }}>Color</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {COLORS.map(c => (
                <button
                  key={c}
                  id={`addzone-color-${c.replace('#','')}`}
                  onClick={() => setSelectedColor(c)}
                  style={{
                    width: '32px', height: '32px',
                    borderRadius: '50%',
                    background: c,
                    border: selectedColor === c ? `3px solid ${c}` : '3px solid transparent',
                    outline: selectedColor === c ? '2px solid #fff, 4px solid ' + c : 'none',
                    boxShadow: selectedColor === c ? `0 0 0 3px ${c}` : 'none',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.15s',
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
            <Button id="addzone-save-btn" variant="primary" fullWidth onClick={() => navigate('/zones')}>
              Save Zone
            </Button>
            <Button id="addzone-cancel-btn" variant="ghost" fullWidth onClick={() => navigate('/zones')}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  )
}
