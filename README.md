
# 🌱 AAJIVIKA.final

**AAJIVIKA.final** is a transformative full-stack web application designed to bridge the employment gap for unemployed and underemployed individuals. More than just a job portal, it serves as a digital ecosystem to empower, educate, and connect marginalized job seekers with meaningful livelihood opportunities.

🌐 **Live Site:** [https://aajivika-final.vercel.app](https://aajivika-final.vercel.app)

---

## 📘 Introduction

In a world where **190 million people are unemployed globally** (ILO, 2023), AAJIVIKA.final addresses systemic barriers to employment, including:

- Limited access to formal job networks
- Mismatched skillsets and lack of training
- Digital illiteracy
- Rural isolation and geographic challenges

---

## 🎯 Problem Statement

This project tackles critical employment challenges:

- **Structural Unemployment** – Lack of access to formal job markets  
- **Skill Mismatch** – Inadequate alignment with current job demands  
- **Digital Divide** – Limited exposure to tech-enabled opportunities  
- **Underemployment** – Wasted potential in mismatched roles  
- **Geographic Barriers** – Disproportionate rural hardships  

---

## 🛠️ Tech Stack

### 🚀 Frontend

- **React.js** – Modern component-based UI
- **Redux** – Robust state management
- **React Router DOM** – Seamless client-side routing
- **Tailwind CSS** – Utility-first styling for responsive UI
- **PWA Support** – Offline-capable experience

### ⚙️ Backend (optional setup)

- **Node.js** – JavaScript runtime
- **Express.js** – Minimalist backend framework
- **MongoDB** – NoSQL database
- **Redis** – High-performance in-memory cache

### 🗺️ Mapping Tools

- **MapLibre GL JS** – Open-source vector maps
- **@maptiler/sdk & @maptiler/geocoding-control** – Location search, geocoding

---

## 📁 Project Structure

```
AAJIVIKA.final/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Map.jsx        ← MapLibre integration
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ...
│   ├── firebase.config.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
```

---

## 🧑‍💻 Getting Started

### 🔁 Clone the Repository

```bash
git clone https://github.com/anika253/AAJIVIKA.final.git
cd AAJIVIKA.final
```

### 📦 Install Dependencies

```bash
npm install
```

### ⚙️ Set Up Environment Variables

```bash
cp .env.example .env
```

> Replace placeholder values in `.env` with your Firebase and API credentials.

### 🚀 Run the Development Server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧱 Build for Production

```bash
npm run build
```

Build files will be generated in the `dist/` directory.

---

## ☁️ Deployment

### ✅ Vercel (Frontend Deployment)

- Live Site: [https://aajivika-final.vercel.app](https://aajivika-final.vercel.app)
- Framework Preset: **Vite**
- Output Directory: **dist**

### 🔧 Render (Backend – optional)

If backend is hosted separately:

- **Root Directory:** `backend/` (if applicable)
- **Build Command:** `npm install`
- **Start Command:** `npm start`

---

## 🤝 Contributing

We welcome contributions from developers passionate about social good.

1. Fork the repository  
2. Create your feature branch  
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes  
   ```bash
   git commit -m 'Add AmazingFeature'
   ```
4. Push to your branch  
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 👥 Contributors

- 💡 [Anika Sharma](https://github.com/anika253)
- 🧠 [Abhishek Kumar](https://github.com/abhi-kumar17871)

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📝 Acknowledgements

- [MapLibre GL JS](https://maplibre.org/)
- [MapTiler](https://www.maptiler.com/)
- [Vercel](https://vercel.com/)
- [Render](https://render.com/)
