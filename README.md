# 🐬 Dolphin Bank

Dolphin Bank is a **modern, secure, and sleek** digital banking platform designed to provide a seamless user experience with a **glassmorphism** aesthetic. Built using **Next.js 15, TailwindCSS, and Appwrite**, this project leverages cutting-edge web technologies to bring a sophisticated and engaging banking dashboard.

---

## 🌟 Features

✅ **Dynamic Banking Dashboard** – View account balance, transactions, and weekly activity at a glance.  
✅ **Glassmorphism UI** – A futuristic, sleek, and immersive user interface.  
✅ **Secure Authentication** – Integrated with Appwrite for account management.  
✅ **Transaction Management** – Add, transfer, and withdraw funds effortlessly.  
✅ **Interactive Welcome Page** – Powered by **p5.js**, creating an engaging first-time user experience.  
✅ **Dark Mode Support** – Enhancing accessibility and usability.  
✅ **Fully Responsive Design** – Optimized for all screen sizes.  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React, TypeScript, TailwindCSS
- **Backend:** Appwrite for authentication and database management
- **UI Components:** Heroicons, Tailwind glassmorphism styling
- **Animation & Interaction:** p5.js for visual effects
- **State Management:** React Hooks & Context API

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
$ git clone https://github.com/ROUSE-prog/Dolphin-Bank.git
$ cd Dolphin-Bank
```

### 2️⃣ Install Dependencies
```sh
$ npm install
```

### 3️⃣ Configure Environment Variables
Create a **.env.local** file and add your Appwrite credentials:
```env
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_API_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
```

### 4️⃣ Run the Development Server
```sh
$ npm run dev
```
Then open **http://localhost:3000** in your browser.

---

## 🎨 UI Preview
| Welcome Page | Dashboard |
|-------------|------------|
| ![Welcome](https://your-image-link) | ![Dashboard](https://your-image-link) |

---

## 📌 Folder Structure
```
Dolphin-Bank/
│── app/
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   ├── login/
│   │   ├── page.tsx
│   ├── signup/
│   │   ├── page.tsx
│   ├── welcome/
│   │   ├── p5canvas.tsx
│   │   ├── page.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── output.css
│   ├── services/
│   │   ├── appwrite.ts
│   ├── utils/
│   │   ├── auth.ts
│── public/
│── src/
│── tailwind.config.ts
│── next.config.ts
│── tsconfig.json
│── README.md
```

---

## 🤝 Contribution Guide
We welcome contributions! If you want to improve Dolphin Bank:
1. **Fork the repository**
2. **Create a new branch** (`feature/new-feature`)
3. **Commit your changes**
4. **Push the branch & submit a PR**

---

## 📜 License
This project is **MIT Licensed** – feel free to use and modify it!

---

## 🌎 Connect With Me
💼 [LinkedIn](https://www.linkedin.com/in/stevenrouse/)  
🐙 [GitHub](https://github.com/ROUSE-prog)  
🚀 Built with ❤️ by **Steven Rouse**
