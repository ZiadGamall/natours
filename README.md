# 🌍 Natours — Node.js Tour Booking Application

A complete tour booking web application built while following a Node.js, Express, and MongoDB bootcamp.
This project demonstrates full-stack JavaScript development, including authentication, payments, REST APIs, and server-side rendering.

---

### 📌 Project Description

Natours is a full-stack Node.js tour booking application that demonstrates production-grade backend engineering using Express, MongoDB, and Mongoose. It includes complete authentication and authorization with JWT, secure payments through Stripe, a fully RESTful API, geospatial features, and robust security middleware. The app also provides server-side rendered pages using Pug and a clean MVC architecture, showcasing how to build scalable, secure, real-world web applications from scratch.

---

### 🚀 Features

### 🔐 Authentication & Authorization

- JWT login & signup
- Password reset via email
- Role-based access: user, guide, lead-guide, admin
- Protected routes & restricted operations

### 🗺️ Tour Functionality

- Browse all tours
- Filtering, sorting, pagination
- Tour reviews & ratings
- Geospatial queries (tours near location)

### 💳 Bookings & Payments

- Complete Stripe checkout flow
- Creating and managing bookings
- Email confirmations

### 🛡️ Security

- Encrypted passwords (bcrypt)
- Rate limiting
- Data sanitization (NoSQL Injection / XSS)
- Helmet, HPP, CORS

---

### 🛠️ Tech Stack

### Backend

- Node.js, Express.js, MongoDB, Mongoose
- JWT Authentication, bcryptjs
- Stripe API, Nodemailer
- Multer, Sharp, Rate Limiting

### Frontend

- Pug templates, CSS, JavaScript
- Mapbox API
- Development
- Nodemon, ESLint, Prettier
- Environment config using dotenv

---

### 📁 Project Structure

```
natours/
├── controllers/        # Route handlers / business logic
├── models/             # MongoDB models (User, Tour, Review, Booking)
├── routes/             # Express API routes
├── utils/              # Error handling, API helpers, email, etc.
├── public/             # Static assets
├── views/              # Pug templates
├── app.js              # Express configuration
└── server.js           # Server entry point
```

### ⚙️ Installation

```
git clone https://github.com/ZiadGamall/natours
cd natours
npm install
```

---

### 🧩 Environment Variables

Create a .env file:

```
NODE_ENV=development
PORT=3000

DATABASE=mongodb://localhost:27017/natours
DATABASE_PASSWORD=

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=

STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

---

### 🏃‍♂️ Running the App

### Development

```
npm run dev
```

### Production

```
npm start
```

Visit:
http://localhost:3000

---

### 🔧 API Overview (Simplified & Representative)

Here are the core endpoints that show the structure of your API without listing everything:

---

### 🌐 Auth

```
POST /api/v1/users/signup
POST /api/v1/users/login
POST /api/v1/users/forgotPassword
PATCH /api/v1/users/resetPassword/:token
PATCH /api/v1/users/updateMyPassword
```

---

### 🧑 Users

```
GET    /api/v1/users/me
PATCH  /api/v1/users/updateMe
DELETE /api/v1/users/deleteMe

# Admin only:
GET    /api/v1/users
GET    /api/v1/users/:id
PATCH  /api/v1/users/:id
DELETE /api/v1/users/:id
```

---

### 🗺️ Tours

```
GET    /api/v1/tours
GET    /api/v1/tours/:id
POST   /api/v1/tours      # Admin/Lead-guide
PATCH  /api/v1/tours/:id  # Admin/Lead-guide
DELETE /api/v1/tours/:id  # Admin

# Geospatial
GET /api/v1/tours/tours-within/:distance/center/:latlng/unit/:unit
GET /api/v1/tours/distances/:latlng/unit/:unit
```

---

### ⭐ Reviews (nested under tours)

```
GET    /api/v1/reviews
POST   /api/v1/reviews        # requires booking
GET    /api/v1/reviews/:id
PATCH  /api/v1/reviews/:id
DELETE /api/v1/reviews/:id
```

---

### 💳 Bookings

```
POST   /api/v1/bookings/checkout-session/:tourId   # Stripe session
GET    /api/v1/bookings
GET    /api/v1/bookings/:id
POST   /api/v1/bookings        # Admin/Guide
PATCH  /api/v1/bookings/:id
DELETE /api/v1/bookings/:id
```

---

### 📚 Learning Outcomes

This project helped me understand:

- Building RESTful APIs with Express
- Structuring large projects using MVC
- MongoDB data modeling & relationships
- Authentication flows (JWT, password hashing)
- Stripe payment integration
- Security best practices
- Error handling & global middleware
- Server-side rendering with Pug
- Production deployment considerations

---

### 🙏 Acknowledgments

- **Jonas Schmedtmann** — for the Node.js Bootcamp
- Node.js / Express / MongoDB communities
- Built for learning and improving backend skills

---
