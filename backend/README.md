# Backend

This is the backend for the car portal application. It is built with Node.js, Express, and MongoDB.

## Getting Started

To get started with this project, you will need to have Node.js and npm installed on your machine.

1. Install the dependencies: `npm install`
2. Create a `.env` file and add the following environment variables:

```
PORT=5000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
EMAIL_HOST=<your_email_host>
EMAIL_PORT=<your_email_port>
EMAIL_USER=<your_email_user>
EMAIL_PASS=<your_email_pass>
```

3. Start the server: `npm start`

## Scripts

* `npm start`: Starts the backend server.
* `npm run create-admin`: Creates an admin user.

## API Endpoints

### Auth

* `POST /api/auth/register`: Register a new user.
* `POST /api/auth/login`: Login a user.
* `POST /api/auth/forgot-password`: Send a password reset email.
* `POST /api/auth/reset-password`: Reset a user's password.

### Cars

* `GET /api/cars`: Get a list of all cars.
* `GET /api/cars/:id`: Get a single car by ID.
* `POST /api/cars`: Create a new car.
* `PUT /api/cars/:id`: Update a car by ID.
* `DELETE /api/cars/:id`: Delete a car by ID.