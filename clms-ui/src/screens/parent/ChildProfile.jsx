import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Pencil } from 'lucide-react'
import MobileFrame from '../../components/MobileFrame'
import BottomNav from '../../components/BottomNav'
import Button from '../../components/Button'
import Input from '../../components/Input'
import StatusChip from '../../components/StatusChip'
import Card from '../../components/Card'
import { mockChild } from '../../data/mock'

export default function ChildProfile() {
  const navigate = useNavigate()
  const [childName, setChildName] = useState(mockChild.name)
  const [locationSharing, setLocationSharing] = useState(true)

  return (
    <MobileFrame>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{
          height: '56px', padding: '0 20px',
          display: 'flex', alignItems: 'center', gap: '12px',
          borderBottom: '1px solid var(--border-subtle)', flexShrink: 0,
        }}>
          <button id="childprofile-back-btn" onClick={() => navigate(-1)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: '4px' }}>
            <ArrowLeft size={20} color="var(--text-body)" />
          </button>
          <p style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-heading)' }}>Child Profile</p>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Avatar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '72px', height: '72px', borderRadius: '50%',
                background: 'var(--bg-elevated)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px', fontWeight: 700, color: 'var(--text-secondary)',
              }}>M</div>
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '24px', height: '24px', borderRadius: '50%',
                background: 'var(--accent-blue)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}>
                <Pencil size={12} color="#fff" strokeWidth={2.5} />
              </div>
            </div>
            <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-heading)' }}>{childName}</p>
          </div>

          {/* Info card */}
          <Card style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input id="childprofile-name" label="Child's Name" value={childName} onChange={e => setChildName(e.target.value)} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-body)' }}>Device ID</span>
              <span style={{ fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-secondary)' }}>
                {mockChild.deviceId}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-body)' }}>Status</span>
              <StatusChip variant="online">● Connected</StatusChip>
            </div>
          </Card>

          {/* Location sharing toggle */}
          <Card style={{ padding: '16px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '2px' }}>Location Sharing</p>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Share live GPS with parent app</p>
              </div>
              <button
                id="childprofile-location-toggle"
                onClick={() => setLocationSharing(p => !p)}
                role="switch"
                aria-checked={locationSharing}
                style={{
                  width: '44px', height: '24px', borderRadius: '999px', border: 'none',
                  background: locationSharing ? 'var(--accent-blue)' : 'var(--border-strong)',
                  cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0,
                }}
              >
                <div style={{
                  position: 'absolute', top: '3px',
                  left: locationSharing ? '23px' : '3px',
                  width: '18px', height: '18px', borderRadius: '50%',
                  background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  transition: 'left 0.2s',
                }} />
              </button>
            </div>
          </Card>

          <Button id="childprofile-unlink-btn" variant="ghost" fullWidth style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}>
            Unlink Device
          </Button>
        </div>

        <BottomNav active="map" onNavigate={navigate} />
      </div>
    </MobileFrame>
  )
}
