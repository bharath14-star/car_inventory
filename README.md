# Car Portal

This is a car portal application with a React frontend and a Node.js backend.

## Features

* User authentication (login, register, forgot password, reset password)
* Admin dashboard to manage cars
* Users can view a list of cars
* Users can view car details
* Protected routes for authenticated users

## Getting Started

To get started with this project, you will need to have Node.js and npm installed on your machine.

### Frontend

1. Navigate to the `frontend` directory.
2. Install the dependencies: `npm install`
3. Start the development server: `npm run dev`

### Backend

1. Navigate to the `backend` directory.
2. Install the dependencies: `npm install`
3. Create a `.env` file and add the following environment variables:

```
PORT=5000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
EMAIL_HOST=<your_email_host>
EMAIL_PORT=<your_email_port>
EMAIL_USER=<your_email_user>
EMAIL_PASS=<your_email_pass>
```

4. Start the server: `npm start`

## Scripts

* `npm run dev`: Starts the frontend development server.
* `npm start`: Starts the backend server.
* `npm run create-admin`: Creates an admin user.

## Deployment

This application can be deployed to any platform that supports Node.js. Here are some example deployment platforms:

* Heroku
* Vercel
* AWS
* Google Cloud

## Architecture

```
+-----------------+      +-----------------+      +-----------------+
|     Frontend    |      |     Backend     |      |    Database     |
| (React, Vite)   |----->| (Node.js, Express)|----->|   (MongoDB)     |
+-----------------+      +-----------------+      +-----------------+
```

## CI/CD

This project uses GitHub Actions for CI/CD. The workflow is defined in the `.github/workflows/main.yml` file. The workflow will automatically build and deploy the application to the production environment when a new commit is pushed to the `main` branch.