```markdown
# Service Now

A full-stack MERN application that allows users to **create, search, and book a wide variety of custom services** — from home cleaning to any service imaginable. The app also includes **dashboard analytics** for service providers, user authentication, and a smooth UI experience using modern tech stacks.

## 🖥️ Live Demo

- Frontend: [https://service-now-mern-stack-djhc.vercel.app](https://service-now-mern-stack-djhc.vercel.app)
- Backend: [https://service-now-mern-stack.vercel.app](https://service-now-mern-stack.vercel.app)

## 🚀 Features

- 🌐 Explore and book various user-created services
- 🧑‍💼 Add and manage services as a service provider
- 📊 Dashboard to track your service stats and bookings
- 🔐 Secure authentication and authorization with sessions & JWT
- 📁 Cloudinary integration for media uploads
- 📅 Date selection and advanced form validations
- 🌗 Dark/light theme toggle
- 📦 Fully typed with Zod + React Hook Form

## 🛠️ Tech Stack

**Frontend**  
- React.js  
- Tailwind CSS  
- Vite  
- Zustand (State Management)  
- TanStack React Query  
- React Hook Form + Zod (Validation)  
- Cloudinary (Image Upload)  
- Framer Motion, GSAP (Animation)  
- Radix UI components  
- Firebase (Optional integration)  

**Backend**  
- Node.js  
- Express.js  
- Prisma ORM  
- MongoDB  
- Passport.js (Google OAuth)  
- JSON Web Tokens (JWT)  
- Multer + Cloudinary (File uploads)  
- Cookie Sessions & Environment config via `dotenv`

## 📁 Project Structure

```

service-now-mern-stack/
├── frontend/         # React.js client with Vite
└── backend/          # Node.js API with Prisma and Express

````

## 📦 Packages Overview

You can check all frontend and backend dependencies in their respective `package.json` files.

## 🧑‍💻 Getting Started (Local Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/ratul544388/service-now-mern-stack.git
cd service-now-mern-stack
````

### 2. Setup Backend

```bash
cd backend
npm install
npx prisma generate
npm run dev
```

Ensure you have a `.env` file with required variables:

```
DATABASE_URL=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Make sure to set your environment variables (`.env`) in the frontend if necessary (e.g., for Firebase or base API URL).

## ⚙️ Deployment

* Frontend is deployed via [Vercel](https://vercel.com)
* Backend is also deployed to Vercel with Express API

## 📄 License

This project is licensed under the MIT License.

---

### 👤 Author

**Ratul Hossain**
Full-Stack Web Developer
📍 Dhaka 1310, Bangladesh
📧 [ratul.hossain.dev@gmail.com](mailto:ratul.hossain.dev@gmail.com)
📞 +8801815555105

---

> ⭐ If you like this project, consider giving it a star on GitHub!

```
