# CLMS — Children's Location Monitoring System
## UI Prototype

React UI prototype for the CLMS project.  
CO3065 Advanced Software Engineering — CC01, Group 1, Semester 252, HCMUT.

### Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Screen Index

| ID  | Screen                | Route              | Role   |
|-----|-----------------------|--------------------|--------|
| P1  | Splash                | /                  | Parent |
| P2  | Register              | /register          | Parent |
| P3  | Login                 | /login             | Parent |
| P4  | MFA Verification      | /mfa               | Parent |
| P5  | Home Dashboard        | /dashboard         | Parent |
| P6  | Live Map              | /map               | Parent |
| P7  | Location History      | /history           | Parent |
| P8  | Safe Zones            | /zones             | Parent |
| P9  | Add Safe Zone         | /zones/add         | Parent |
| P10 | Notifications         | /notifications     | Parent |
| P11 | SOS Alert Modal       | /sos-alert         | Parent |
| P12 | Child Profile         | /child-profile     | Parent |
| P13 | Account Settings      | /settings          | Parent |
| P14 | Offline State         | /offline           | Parent |
| C1  | Child Login           | /child/login       | Child  |
| C2  | Child Home (SOS)      | /child             | Child  |
| C3  | SOS Confirmation      | /child/sos-confirm | Child  |
| C4  | SOS Sent              | /child/sos-sent    | Child  |
| C5  | SOS Queued (Offline)  | /child/sos-queued  | Child  |

View all screens at once: [/nav](http://localhost:5173/nav)

### Tech Stack

- React 18 + Vite
- React Router v6
- Tailwind CSS v3
- Lucide React
- DM Sans + JetBrains Mono (Google Fonts)
