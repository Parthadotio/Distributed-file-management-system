Distributed File Management System
A full-stack file management app with a React + Vite frontend and an Express + MongoDB backend. The project includes a privacy-first landing page, user authentication flows, email verification, and the foundation for secure file and folder management.

Overview
The application is split into two parts:

Client:
A modern landing page built with React, Vite, and Tailwind CSS.

Server:
An Express API with MongoDB, JWT-based authentication, email verification, session handling, and Google Cloud integration.

Tech Stack
Client:
React
Vite
Tailwind CSS

Server:
Node.js
Express
MongoDB
Mongoose
JWT
Nodemailer
Google Cloud Storage
Redis

Project Structure
client/
Frontend application

server/
Backend API, models, controllers, routes, and services

Features
Modern landing page inspired by a privacy-first cloud platform
User registration and login
Email verification with OTP
JWT access tokens and refresh-token sessions
Logout and logout-all endpoints
Backend configuration validation on startup
Google Cloud service-account support for storage-related features

Prerequisites
Before running the project, make sure you have:

Node.js installed
MongoDB running or a valid MongoDB connection string
Google Cloud credentials available locally
A valid email provider configuration for OTP delivery

Environment Variables
Create a server .env file with the following values:

PORT=8000
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REFRESH_TOKEN=your_google_refresh_token
GOOGLE_USER=your_google_account_email

If your local setup uses Google Cloud service credentials, keep the JSON file inside server/secrets/ and do not commit it.

Installation
Install dependencies for the frontend:

cd client
npm install

Install dependencies for the backend:

cd server
npm install

Running the App
Start the frontend:

cd client
npm run dev

Start the backend:

cd server
npm run dev

Available Scripts
Client:
npm run dev
npm run build
npm run lint
npm run preview

Server:
npm run dev

API Routes
Base path:
/api/auth

Routes:
POST /register
POST /login
GET /refresh-token
GET /logout
GET /logout-all
GET /verify-email

Security Notes
Do not commit .env files
Do not commit files inside server/secrets/
Rotate any exposed credentials immediately if they were ever committed
Keep refresh tokens and service account files local only

License
Add your preferred license here if needed.
