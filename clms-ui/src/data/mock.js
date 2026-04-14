export const mockParent = {
  name: "Nguyen Thi Lan",
  email: "lan@example.com",
}

export const mockChild = {
  name: "Minh",
  deviceId: "CLMS-2024-A7F3",
  battery: 78,
  online: true,
  lastSeen: "2 min ago",
  location: {
    address: "123 Nguyen Hue Blvd, District 1, Ho Chi Minh City",
    lat: 10.7769,
    lng: 106.7009,
    updatedAt: "2 min ago",
    gpsQuality: "good",
  },
  currentZone: "Home",
}

export const mockZones = [
  { id: 1, name: "Home", type: "circle", radius: "200m", active: true, color: "#2563EB" },
  { id: 2, name: "School", type: "circle", radius: "500m", active: true, color: "#16A34A" },
  { id: 3, name: "Grandma's", type: "circle", radius: "150m", active: false, color: "#D97706" },
]

export const mockNotifications = [
  {
    id: 1, type: "sos", childName: "Minh",
    message: "sent an emergency alert",
    timestamp: "Today, 14:32", read: false,
  },
  {
    id: 2, type: "geofence", childName: "Minh",
    message: "left School Zone",
    timestamp: "Today, 13:15", read: false,
  },
  {
    id: 3, type: "geofence", childName: "Minh",
    message: "arrived at Home Zone",
    timestamp: "Today, 13:45", read: true,
  },
]

export const mockHistory = [
  {
    date: "Today, Apr 14",
    entries: [
      { time: "15:30", address: "123 Nguyen Hue Blvd, D1", duration: "Now" },
      { time: "13:45", address: "123 Nguyen Hue Blvd, D1 (Home)", duration: "1h 45m" },
      { time: "08:00", address: "45 Le Loi St, District 1 (School)", duration: "5h 45m" },
    ]
  },
  {
    date: "Yesterday, Apr 13",
    entries: [
      { time: "17:00", address: "123 Nguyen Hue Blvd, D1", duration: "Evening" },
      { time: "07:45", address: "45 Le Loi St, District 1 (School)", duration: "6h" },
    ]
  }
]
