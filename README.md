# 🌊 Wavefounds – Digital Wallet Frontend

A **secure, role-based, and user-friendly** digital wallet system built with **React, Redux Toolkit, and RTK Query**, inspired by services like **bKash** and **Nagad**.  

🔗 **Live Demo:** [https://digital-wallet-client-six.vercel.app/](https://digital-wallet-client-six.vercel.app/)  

---

## ✨ Features

### 🔓 Public Landing Section
- Responsive **Home Page** with hero banner, CTA, sticky navbar & footer  
- **About, Features, Contact, FAQ** pages  
- Smooth transitions, skeleton loading, and responsive UI  

### 🔑 Authentication
- **OTP-based Login** with JWT  
- Registration with **User** / **Agent** role selection  
- Role-based redirection after login  
- Persisted auth state (remains logged in after refresh)  
- Logout functionality  

### 👤 User Dashboard
- Wallet balance overview & quick actions  
- Deposit, withdraw, send money (search user by phone/email)  
- Transaction history with pagination & filters  
- Profile update (name, phone, password)  

### 🧑‍💼 Agent Dashboard
- Cash-in / Cash-out operations  
- User wallet management  
- Agent’s transaction history & commission tracking  
- Profile management  

### 🛠️ Admin Dashboard
- Overview of users, agents, and transactions  
- User management (view, block/unblock)  
- Agent management (approve/suspend)  
- Global transaction monitoring with filters & search  
- System settings (fees/limits – optional)  
- Profile update  

### ⚡ General Features
- Role-based navigation menus  
- Loading indicators & global error handling  
- Form validation & advanced search/filtering  
- Pagination on lists & tables  
- **Charts & Cards** for data visualization  
- **Toast Notifications** for instant feedback  
- **Guided Tour (react-joyride)** – highlights 5 key features for new users  
- Light/Dark mode toggle  
- Fully responsive design (mobile-first)  

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React + TypeScript  
- 🛠️ Redux Toolkit + RTK Query  
- 🎨 Tailwind CSS (UI styling)  
- 🔔 React-Toastify / Sonner (notifications)  
- 🧭 React Joyride (guided tour)  

### Backend (separate repo)
- Node.js + Express  
- MongoDB + Mongoose  
- JWT + bcrypt for authentication  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/wavefounds-client.git
cd wavefounds-client
