# E-Commerce Platform

A full-stack E-Commerce web application with dedicated `admin`, `backend`, and `frontend` modules.

## Project Structure

```text
e-commerce/
├── admin/         # Admin dashboard & store management interface
├── backend/       # Server-side API, authentication, and database logic
├── frontend/      # Customer-facing storefront UI
└── .gitignore     # Ignored files and environment configurations
```

## Features

- User authentication and authorization (Sign up, Login, Logout)
- Product catalog browsing, search, and category filtering
- Shopping cart and order checkout flow
- Admin panel for managing products, orders, and users

## Tech Stack

- **Frontend & Admin:** JavaScript, HTML5, CSS3
- **Backend:** Node.js, Express, MongoDB

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/alieak786-sys/e-commerce.git](https://github.com/alieak786-sys/e-commerce.git)
   cd e-commerce
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file inside `backend` and configure your environment variables (`PORT`, `MONGO_URI`, `JWT_SECRET`), then start the server:
   ```bash
   npm start
   ```

3. **Setup Frontend**
   Open a new terminal, navigate to `frontend`, install dependencies, and start the app:
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Setup Admin Panel**
   Open another terminal, navigate to `admin`, install dependencies, and start the app:
   ```bash
   cd admin
   npm install
   npm start
   ```

## License

This project is open-source and available under the [MIT License](LICENSE).
