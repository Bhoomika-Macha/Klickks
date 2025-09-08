# Klickks – Login & Logout Flow in React.js & Node.js

## 🔹 Project Overview

This project demonstrates a **simple authentication system** using React (frontend) and Node.js + Express (backend) with SQLite database.  

Features implemented:  
1. **Register (Sign Up):** User creates an account with email & password.  
2. **Login:** User logs in using registered credentials.  
3. **Session Management:** Stay logged in using cookies & express-session.  
4. **Logout:** Clear session & redirect to login.  
5. **Protected Route:** `/dashboard` is accessible only when logged in.  

---

## 🛠 Tech Stack

- **Frontend:** React.js (Axios for API calls)  
- **Backend:** Node.js + Express.js  
- **Database:** SQLite (file-based DB)  
- **Password Hashing:** bcrypt  
- **Session Handling:** express-session + cookie-parser  
- **Deployment:**  
  - Frontend → Vercel  
  - Backend → Render  

---

## Backend Setup (Node.js + Express)

1. Navigate to backend:
   ```bash
  cd backend
   
2. Install dependencies:
  npm install

3. Start backend server:
  npm start

4. Runs at:
  http://localhost:5000

## Frontend Setup (React.js)

1. Navigate to frontend:
  cd frontend

2. Install dependencies:
  npm install

3. Start frontend:
  npm start

4. Runs at:
  http://localhost:3000

## API Endpoints

POST /api/auth/register → Register new user

POST /api/auth/login → Authenticate user

GET /api/auth/session → Check login session

POST /api/auth/logout → Logout and clear session

## Deployment Links

**GitHub Repo: https://github.com/Bhoomika-Macha/Klickks**

**Backend (Render): https://klickks-backend-8jgn.onrender.com**

**Frontend (Vercel): https://klickks-frontend-theta.vercel.app**

## Features

1. Register with email + password
2. Secure password hashing using bcrypt
3. Login & stay authenticated via cookies/sessions
4. Logout clears session immediately
5. Protected dashboard page (redirects to login if unauthenticated)
