# 🏨 Hotel Management System — Next.js + Firebase

A modern hotel management dashboard with login/signup functionality, built using **Next.js 14 App Router** and **Firebase Firestore**. Perfect for managing hotels, users, and secure access — fast, scalable, and fully client-side rendered.

---

## 🚀 Tech Stack

- ⚛️ **Next.js 14** — App Router + Client Components
- 🔥 **Firebase Firestore** — Free cloud NoSQL database
- 🎨 **SCSS Modules** — For custom styling
- 🧠 **React Hooks** — useState, useEffect
- 📦 **Vercel** — Auto-deployment

---

## ✨ Features

- ✅ User Signup with full details
- ✅ Secure Login using Firebase
- ✅ Real-time Firestore database storage
- ✅ Dynamic tab-based UI (Signup/Login)
- ✅ Responsive layout
- 🚧 Coming Soon: User Dashboard, Room Management

---

## 📁 Folder Structure

src/
├── app/
│ ├── login/ # Login + Signup logic
│ ├── dashboard/ # Future: Dashboard UI
│ ├── profile/ # Future: User profile
│ └── layout.js # App layout
├── components/ # Reusable UI components
├── lib/ # Firebase setup
├── styles/ # SCSS modules
public/ # Static assets

yaml
Copy
Edit

---

## 🛠️ Getting Started

### 1. Clone this repo:

```bash
git clone git@github.com:RehmanGhoto97/hotel-management-system-nextjs-firebase.git
cd hotel-management-system-nextjs-firebase
2. Install dependencies:
bash
Copy
Edit
npm install
3. Run locally:
bash
Copy
Edit
npm run dev
App runs at http://localhost:3000

🔐 Firebase Setup
Firebase project created in test mode

Firestore used to store user info

For your own Firebase setup, create a .env.local:

makefile
Copy
Edit
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
...
🌐 Deployment
Auto-deployed via Vercel from GitHub:

Every push to main triggers a redeploy

https://vercel.com

📌 To-Do
 Implement dashboard view

 Add Firebase Auth (login sessions)

 Role-based access (Admin vs Staff)

 CRUD operations for room/hotel management

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first.

📄 License
MIT

Built with ❤️ by Rehman Ghoto

yaml
Copy
Edit

---

Would you like me to add this file to your project automatically?  
Let me know if you'd prefer a more minimal version too!


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
