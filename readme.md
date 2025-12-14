# GDG Hack Backend

A scalable and secure backend service built with **Node.js** and **Express.js** for a game-based application. This project provides authentication, game world management, boss data, stages, and in-game store APIs, designed for hackathon and production-ready use.

## 🚀 Features

* User Authentication (Signup, Login, JWT-based auth)
* Secure protected routes
* Game Worlds & Stages management (CRUD)
* Bosses and Store APIs
* Modular MVC architecture
* Automated testing with Jest

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **JWT Authentication**
* **MongoDB** (via Mongoose)
* **Jest** for testing

## 📂 Project Structure

```
GDG-HACK-BACKEND
├── controllers/       # Business logic
├── routes/            # API routes
├── middleware/        # Auth & helpers
├── models/            # Database schemas
├── tests/             # Unit & API tests
├── server.js          # App entry point
└── package.json
```

## 🔐 Authentication Routes

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| POST   | /auth/signup | Register a new user |
| POST   | /auth/login  | User login          |
| GET    | /auth/me     | Get logged-in user  |

## 🎮 Game Routes

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| GET    | /game/worlds            | Get all worlds        |
| POST   | /game/worlds            | Create a world (Auth) |
| PUT    | /game/worlds/:id        | Update world (Auth)   |
| DELETE | /game/worlds/:id        | Delete world (Auth)   |
| GET    | /game/worlds/:id/stages | Get stages            |
| GET    | /game/bosses            | Get bosses            |
| GET    | /game/store             | Get store items       |

## 🧪 Testing

Run all tests using:

```bash
npm test
```

## ▶️ Run Locally

```bash
npm install
npm start
```

## 📌 Use Case

Ideal for hackathons, game prototypes, or learning backend architecture with authentication and role-based APIs.

---

## 📄 300-Character Project Description

A Node.js and Express backend for a game platform featuring JWT authentication, world and stage management, boss data, and in-game store APIs. Built with clean architecture, secure routes, and automated tests, ideal for scalable game applications.
