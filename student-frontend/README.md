# Student Management System — Frontend

A **React** application for managing student records, with a clean responsive UI, real-time form validation, and friendly error/success messages. Built with Create React App.

## 🚀 Quick Start

```bash
cd student-frontend
npm install
copy .env.example .env      # cp .env.example .env  on Mac/Linux
npm start                   # development → http://localhost:3000
# npm run build             # production build
# npm test                  # run tests
```

> The backend (`StudentAPI`) must be running on the URL in `.env` for data to load.

## ⚙️ Environment Variables

Copy `.env.example` to `.env`:

```
REACT_APP_API_URL=http://localhost:5000
```

## 📁 Structure

```
student-frontend/
├── public/                 # Static assets & index.html
├── src/
│   ├── components/
│   │   ├── StudentForm.js       # Add/Edit form
│   │   ├── StudentList.js       # Student table
│   │   ├── ErrorMessage.js      # Error notification
│   │   └── SuccessMessage.js    # Success notification
│   ├── pages/
│   │   └── StudentManagement.js # Main page container
│   ├── hooks/
│   │   └── useStudent.js        # Centralized state + API logic
│   ├── services/
│   │   ├── apiClient.js         # Axios instance (base URL from .env)
│   │   └── StudentService.js    # API methods (CRUD)
│   ├── utils/helpers.js
│   ├── App.js                   # Root component
│   └── index.js                 # Entry point
└── .env.example
```

## 🔄 Data Flow

```
StudentManagement (page)
   → useStudent (hook: state + loading/error)
      → StudentService (CRUD methods)
         → apiClient (axios, baseURL from REACT_APP_API_URL)
            → backend /students endpoints
```

## 🎯 Features

- Add, view, edit, and delete students
- Real-time name & email validation
- Loading states and success/error notifications
- Responsive layout for desktop and mobile

## 🛠 Tech Stack

| Technology    | Version | Purpose       |
|---------------|---------|---------------|
| React         | 19.2.7  | UI framework  |
| Axios         | 1.18.0  | HTTP client   |
| React Scripts | 5.0.1   | Build tooling |

## 🐛 Troubleshooting

- **API connection fails** — make sure the backend is running and `REACT_APP_API_URL` in `.env` is correct. Restart `npm start` after editing `.env`.
- **State not updating** — check the dependency arrays in `useStudent.js`.

## 📄 License

ISC — open source and free to use.
