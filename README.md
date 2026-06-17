# 🎓 Student Management System

A full-stack CRUD web application for managing student records — an **Express.js + SQLite** REST API and a **React** frontend.

---

## 🏗 Project Structure

```
Node.js/
├── StudentAPI/             # Backend  — Express.js + SQLite REST API
│   ├── src/
│   │   ├── config/         # Database connection & init
│   │   ├── constants/      # HTTP status codes
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Error handling
│   │   ├── models/         # Database queries
│   │   ├── routes/         # API route definitions
│   │   ├── utils/          # Validators & response helpers
│   │   └── app.js          # Express app setup
│   ├── database/           # SQLite file (students.db, gitignored)
│   ├── server.js           # Entry point
│   ├── .env.example        # Sample environment config
│   └── README.md
│
└── student-frontend/       # Frontend — React (Create React App)
    ├── public/
    ├── src/
    │   ├── components/      # Form, list, message UI
    │   ├── pages/           # StudentManagement page
    │   ├── hooks/           # useStudent state hook
    │   ├── services/        # Axios API client
    │   ├── utils/           # Helpers
    │   └── App.js
    ├── .env.example
    └── README.md
```

Each part has its own README with details — see [StudentAPI/README.md](StudentAPI/README.md) and [student-frontend/README.md](student-frontend/README.md).

---

## 🚀 Quick Start

You need **Node.js v14+** and **npm**. Run the backend and frontend in two separate terminals.

### 1. Backend

```bash
cd StudentAPI
npm install
copy .env.example .env      # Windows  (use: cp .env.example .env  on Mac/Linux)
npm run dev                 # starts on http://localhost:5000
```

### 2. Frontend

```bash
cd student-frontend
npm install
copy .env.example .env
npm start                   # starts on http://localhost:3000
```

Open **http://localhost:3000** in your browser.

---

## 📚 API Endpoints

Base URL: `http://localhost:5000/students`

| Method | Endpoint        | Description         |
|--------|-----------------|---------------------|
| GET    | `/students`     | Get all students    |
| GET    | `/students/:id` | Get a student by ID |
| POST   | `/students`     | Create a student    |
| PUT    | `/students/:id` | Update a student    |
| DELETE | `/students/:id` | Delete a student    |

Request body for create/update: `{ "name": "John Doe", "email": "john@example.com" }`

---

## 🔄 How It Works

```
React UI  →  StudentService (axios)  →  Express routes  →  controller
   →  model  →  SQLite database  →  response back up to the UI
```

---

## 💻 Tech Stack

**Backend:** Node.js · Express 5 · SQLite3 · CORS · dotenv · nodemon
**Frontend:** React 19 · Axios · React Scripts (CRA)

---

## 📄 License

ISC — free and open-source.
