# Farmer Portal Project

A comprehensive web application to help farmers access government schemes, watch tutorial videos, and manage their profiles.

## Features

- User Authentication (Login/Register)
- Government Schemes Catalog
- Video Tutorials
- Official Links & Resources
- User Profile Management
- Admin Dashboard for Scheme Management

## Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls
- Lucide React for icons

### Backend
- Node.js & Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed locally or MongoDB Atlas account
- Git

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/farmer_portal
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Install frontend dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

## API Endpoints

### User Routes
- POST /api/users/login - User login
- POST /api/users - Register new user
- GET /api/users/profile - Get user profile
- PUT /api/users/profile - Update user profile

### Scheme Routes
- GET /api/schemes - Get all schemes
- GET /api/schemes/:id - Get scheme by ID
- POST /api/schemes - Create new scheme (Admin only)
- PUT /api/schemes/:id - Update scheme (Admin only)
- DELETE /api/schemes/:id - Delete scheme (Admin only)

## Development

1. Backend development server runs on http://localhost:5000
2. Frontend development server runs on http://localhost:5173
3. API requests from frontend are proxied to backend

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request