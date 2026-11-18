# NexusSaaS Business Management & Attendance Suite 🚀

> **Production-Grade Commercial SaaS Platform** featuring 3 strictly isolated role dashboards (**Platform Developer**, **Client Admin / Business Owner**, and **Staff Employee**), automated background subscription billing & kill-switch, inventory audit trails, and SheetJS Excel attendance reports.

---

## 📁 Project Architecture & Clean Folder Structure

```
project saas/
├── backend/                  # Node.js & Express REST API Server
│   ├── prisma/               # SQLite DB (dev.db) & Prisma Schema
│   │   ├── dev.db
│   │   └── schema.prisma
│   ├── src/
│   │   ├── config/           # Database Client Configuration
│   │   ├── controllers/      # Admin, Auth, Employee, Developer Controllers
│   │   ├── jobs/             # Daily node-cron automated subscription expiry
│   │   ├── middleware/       # JWT Auth, SaaS License Check & Geofence Guard
│   │   ├── routes/           # Express Route definitions
│   │   ├── seed.js           # Database Seed Script
│   │   └── server.js         # Express Server Entry Point (Port 5000)
│   ├── .env                  # Backend Configuration & JWT Secret
│   ├── package.json
│   ├── test-runner.js        # Architectural Test Suite
│   └── test-suite.js         # Automated 14-point Enterprise Test Suite
│
├── frontend/                 # React 19 + Vite 8 Single Page Application
│   ├── public/               # Static assets & icons
│   ├── src/
│   │   ├── assets/           # Images & SVGs
│   │   ├── components/       # Navbar, CheckInButton, StatCard
│   │   ├── context/          # AuthContext (JWT & Role session management)
│   │   ├── pages/            # Role Dashboards (Admin, Developer, Employee, Auth)
│   │   ├── services/         # Axios API client with automatic token attachment
│   │   ├── App.jsx           # React Router route configuration
│   │   └── main.jsx
│   ├── .env                  # Frontend Environment (VITE_API_URL)
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js        # Vite Config with /api reverse proxy to port 5000
│
├── package.json              # Full-Stack Monorepo Orchestration
├── run-fullstack.js          # Unified launcher (starts Backend + Frontend together)
├── run-dev.bat               # Windows 1-Click Full-Stack Launcher (Double-click to run)
├── run-dev.ps1               # PowerShell Full-Stack Launcher
└── README.md
```

---

## ⚡ Quick Start: Running Full-Stack on Localhost

You can start both **Frontend** (React on port 5173) and **Backend** (Express on port 5000) with **ONE single command** from the root folder:

### Option A: Via NPM (Terminal / Command Prompt)
```bash
npm run dev
# or
npm start
```

### Option B: Windows 1-Click Batch File (No terminal setup required!)
Simply **double-click `run-dev.bat`** in Windows File Explorer or execute in terminal:
```cmd
run-dev.bat
```

### Option C: Direct Node.js Command
```bash
node run-fullstack.js
```

---

## 🌐 Live URLs

- **Frontend Web App:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:5000/api](http://localhost:5000/api)
- **Backend Health Check:** [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 🔑 Pre-Seeded Default Demo Accounts

The database comes pre-seeded with all roles ready to test:

| Role | Email | Password | Details |
| :--- | :--- | :--- | :--- |
| **Developer (SaaS Owner)** | `developer@saas.com` | `Developer123!` | Master platform command (Slot 1/2) |
| **Active Client Admin** | `admin@corporate.com` | `Admin123!` | Apex Global Logistics (Full Dashboard access) |
| **Suspended Client Admin** | `blocked@retail.com` | `Admin123!` | Test the **SaaS Kill-Switch** lock screen |
| **Staff Employee** | `sarah@corporate.com` | `Employee123!` | Dedicated terminal & check-in punch |

*(Tip: The login page includes 1-click quick credentials switcher buttons for rapid testing.)*

---

## 🛠️ Individual Commands & Maintenance

If you ever want to run backend or frontend separately, or re-seed the database:

### Re-seed Database
```bash
npm run seed
```

### Run Backend Alone
```bash
npm run dev:backend
```

### Run Frontend Alone
```bash
npm run dev:frontend
```

### Build Frontend for Production
```bash
npm run build
```

### Run Automated Test Suite
```bash
npm test
```

---

## 🌟 Key Architecture & Capabilities

1. **3 Distinct Roles & Workspaces:**
   - **DEVELOPER:** Platform metrics, tenant oversight, SaaS Kill-Switch (block/unblock clients), subscription renewal (+30/90/365 days), system audit logs. Strictly capped to max 2 developers globally.
   - **ADMIN:** Workforce attendance tracking, shift definitions, manual punch adjustments, SheetJS `.xlsx` Excel export, dynamic inventory CRUD, profit & loss analytics, staff payroll calculations, and leave approvals.
   - **EMPLOYEE:** Self-service clock punch-in/out terminal, automatic late detection based on shift, attendance history, and leave requests. Optional office network / geo-fencing validation.

2. **SaaS Kill-Switch & Automated Subscription Engine:**
   - Developer can instantly toggle an Admin's `isBlocked` flag.
   - Background cron sweeps the database daily; overdue accounts are automatically suspended.
   - Any blocked client or their employee receives a dedicated branded suspension screen (`/subscription-blocked`).

3. **Inventory Management & Financial Analytics:**
   - Dynamic search by item name, SKU, or category.
   - Low stock warning badges.
   - Automatic audit trail for every stock modification.
   - Sales dispatch with automatic profit/loss computation.

---

## 📷 Live Scanner POS (Python Computer Vision Module)

A real-time camera scanning service in `scanner-service/` (Python, OpenCV, pyzbar, optional Tesseract OCR) drives the **Admin → Live Scanner POS** tab.

- **Camera feed:** webcam index (`0`, `1`) or a mobile stream URL (e.g. the IP Webcam app: `http://<phone-ip>:8080/video`), streamed to the dashboard as MJPEG with detection boxes.
- **Recognition:** barcodes (EAN/UPC/Code128…) and QR codes. pyzbar is used when its zbar DLL loads; OpenCV's built-in detectors are always available as a fallback. OCR text matching turns on automatically if `pytesseract` and the Tesseract binary are installed.
- **Lookup:** each code goes to `GET /api/inventory/lookup?code=…`, using the logged-in admin's JWT, and returns the exact product name and selling price for that business. Without a dashboard session the service uses a local demo SQLite catalog (`scanner-service/products.db`).
- **Cart logic:** a dictionary keyed by product id. A repeat scan does `quantity += 1`; a new product starts at 1. Row Total = Unit Price × Quantity, and the Grand Total updates live over Server-Sent Events.
- **Debounce:** a 2 s per-product cooldown, adjustable in the UI from 1 to 5 s, so 30 fps capture doesn't add the same item 10 times.
- **Checkout:** *Complete Sale* posts the cart to `/api/admin/checkout`, using the current camera frame as the handover photo. This deducts stock and records the sale in Profit & Loss.

```bash
npm run install:scanner   # pip install -r scanner-service/requirements.txt
npm run dev:scanner       # or double-click run-scanner.bat; `npm run dev` also starts it
```

Env vars: `SCANNER_PORT` (8765), `CAMERA_SOURCE` (0), `SCAN_COOLDOWN` (2), `BACKEND_URL`, `OCR_ENABLED`. Frontend: `VITE_SCANNER_URL`.
