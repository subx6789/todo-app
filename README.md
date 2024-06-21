# Todo App Backend

This is the Todo App, built with Node.js, Express, MongoDB, and using JWT for authentication. This project includes user registration and login functionalities with data validation using Zod.

# Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Endpoints](#endpoints)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

# Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/subx6789/todo-app.git
   cd todo-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

# Configuration

1. Create a `.env` file in the root directory and add your MongoDB URL and JWT secret:

   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

# Scripts

- **Start the server**:

  ```bash
  npm start
  ```

- **Run in development mode**:

  ```bash
  npm run dev
  ```

# Endpoints

### Auth

- **POST /api/auth/register**: Register a new user

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```

- **POST /api/auth/login**: Login a user

  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```

### Todo

- **GET /api/todos/**: Get all of your created todos.

  Requires a valid JWT token in the `Authorization` header.

  ```json
  {
    "Authorization": "Bearer your_jwt_token"
  }
  ```

- **POST /api/todos/**: For creating a todo.

  Requires a valid JWT token in the `Authorization` header.

  ```json
  {
    "text": "Study the basics of computer networking."
  }
  ```

- **PUT /api/todos/:id**: For marking the todo you have created as done or completed.

  Requires a valid JWT token in the `Authorization` header.

- **DELETE /api/todos/:id**: For deleting a todo you have created.

  Requires a valid JWT token in the `Authorization` header.

# Technologies

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **JWT (jsonwebtoken)**
- **Zod**

# Project Structure

```
    backend/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── authController.js
    |   └── todoControllers.js
    ├── middleware/
    │   └── authMiddleware.js
    │   └── validate.js
    ├── models/
    │   └── User.js
    │   └── Todo.js
    ├── routes/
    │   └── authRoutes.js
    │   └── todoRoutes.js
    ├── schemas/
    │   └── userSchemas.js
    ├── .gitignore
    ├── .env
    ├── package.json
    ├── package-lock.json
    └── server.js
```

# Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or improvements.

# LICENSE

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.