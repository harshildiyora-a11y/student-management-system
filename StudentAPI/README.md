# Student Management System — Backend API

A RESTful API built with **Express.js** and **SQLite** for managing student records, with CORS support and centralized error handling.

## 🚀 Quick Start

```bash
cd StudentAPI
npm install
copy .env.example .env      # cp .env.example .env  on Mac/Linux
npm run dev                 # development, auto-reload via nodemon
# npm start                 # production
```

Server runs on **http://localhost:5000**.

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and adjust as needed:

```
PORT=5000
NODE_ENV=development
DATABASE_PATH=./database/students.db
```

## 📁 Structure

```
StudentAPI/
├── src/
│   ├── config/db.js                  # SQLite connection + table init
│   ├── constants/httpStatus.js       # HTTP status code constants
│   ├── controllers/studentController.js  # Request handlers
│   ├── middleware/errorHandler.js    # Global error handler
│   ├── models/studentModel.js        # Database queries
│   ├── routes/studentRoutes.js       # Route definitions
│   ├── utils/                        # validators.js, responseHandler.js
│   └── app.js                        # Express app configuration
├── database/students.db              # SQLite file (gitignored)
├── server.js                         # Entry point
└── .env.example
```

This follows the **MVC** pattern: routes → controllers → models → database, with config and middleware kept separate.

## 📚 API Endpoints

Base URL: `http://localhost:5000/students`

| Method | Endpoint        | Body                          | Description         |
|--------|-----------------|-------------------------------|---------------------|
| GET    | `/students`     | —                             | Get all students    |
| GET    | `/students/:id` | —                             | Get a student by ID |
| POST   | `/students`     | `{ "name", "email" }`         | Create a student    |
| PUT    | `/students/:id` | `{ "name", "email" }`         | Update a student    |
| DELETE | `/students/:id` | —                             | Delete a student    |

### Example — create a student

```bash
curl -X POST http://localhost:5000/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Smith", "email": "jane@example.com"}'
```

```json
{
  "message": "Student created successfully",
  "id": 2,
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

## 🛠 Tech Stack

| Technology | Version | Purpose                  |
|------------|---------|--------------------------|
| Express.js | 5.2.1   | Web framework            |
| SQLite3    | 6.0.1   | Database                 |
| CORS       | 2.8.6   | Cross-origin requests    |
| dotenv     | 16.4.5  | Environment variables    |
| nodemon    | 3.1.0   | Dev auto-reload          |

## 🐛 Troubleshooting

- **Port already in use** — change `PORT` in `.env`.
- **Database locked** — stop the server, delete `database/students.db`, restart (the table is recreated automatically).
- **CORS errors** — confirm the frontend's `REACT_APP_API_URL` points to this server.

## 📄 License

ISC — open source and free to use.
