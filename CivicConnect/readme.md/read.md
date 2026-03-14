# 🏛 CivicConnect

> A full-stack community civic issue reporting and resolution platform built with React, Node.js, and MongoDB.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-blue?style=for-the-badge)](https://civic-connect-dun.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Render-green?style=for-the-badge)](https://civicconnect-zwha.onrender.com/)
[![GitHub](https://img.shields.io/badge/GitHub-modiviveks-black?style=for-the-badge&logo=github)](https://github.com/modiviveks/CivicConnect)

---

## 🌟 Live Demo

👉 **[https://civic-connect-dun.vercel.app/](https://civic-connect-dun.vercel.app/)**

**Test Credentials:**
| Role | Email | Password |
|------|-------|----------|
| Citizen | vivek@gmail.com | vivek123 |

---

## 📌 Problem Statement

Citizens in urban areas have no easy, transparent way to report local civic issues like potholes, broken streetlights, or garbage overflow — and no way to track whether they've been resolved. CivicConnect bridges this gap by providing a platform where citizens can report issues, resolvers can claim and fix them, and everyone can monitor city health in real time.

---

## ✨ Features

### 👤 Citizens
- Register and login securely with JWT authentication
- Report civic issues with title, description, category, urgency, and location
- View all community-reported issues in a live feed
- Upvote issues to signal community priority
- Track issue status in real time

### 🔧 Resolvers
- Claim open issues and update their status
- Move issues through: Open → In Progress → Resolved → Closed
- Role-based access control (only resolvers see status update buttons)

### 📊 Public Dashboard
- City Health Score showing resolution rate
- Issues breakdown by category with visual progress bars
- Total issues, open, in-progress, and resolved counts
- Registered citizens count

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Inline CSS with custom design system |
| Routing | React Router DOM v6 |
| HTTP Client | Axios |
| State Management | React Context API |
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas + Mongoose |
| Authentication | JWT + bcryptjs |
| Frontend Deploy | Vercel |
| Backend Deploy | Render |

---

## 🏗️ System Architecture

```
React (Vercel)  →  Express REST API (Render)  →  MongoDB Atlas
     ↑                      ↑
JWT Auth              Role-based middleware
Context API           (citizen / resolver / admin)
```

---

## 📁 Project Structure

```
CivicConnect/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   ├── issue.controller.js
│   │   │   └── dashboard.controller.js
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Issue.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── issue.routes.js
│   │   │   └── dashboard.routes.js
│   │   ├── utils/
│   │   │   └── db.js
│   │   └── index.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── auth.js
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Issues.jsx
    │   │   └── CityDashboard.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## 🚀 API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login user | ❌ |
| GET | `/api/auth/me` | Get current user | ✅ |
| GET | `/api/issues` | Get all issues | ❌ |
| POST | `/api/issues` | Create new issue | ✅ |
| GET | `/api/issues/:id` | Get single issue | ❌ |
| PATCH | `/api/issues/:id/status` | Update issue status | ✅ Resolver |
| POST | `/api/issues/:id/upvote` | Upvote an issue | ✅ |
| GET | `/api/dashboard/stats` | Get city stats | ❌ |

---

## ⚙️ Local Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Git

### 1. Clone the repository
```bash
git clone https://github.com/modiviveks/CivicConnect.git
cd CivicConnect
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 🔮 Upcoming Features

- 📸 Image upload with Cloudinary
- 🗺️ Google Maps integration for location picking
- 🔔 Email notifications on status change
- 👨‍💼 Admin panel for user management
- 📱 PWA support for mobile

---

## 👨‍💻 Author

**Vivek Modi**
- GitHub: [@modiviveks](https://github.com/modiviveks)
- Live App: [https://civic-connect-dun.vercel.app/](https://civic-connect-dun.vercel.app/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).