# 🚴 Bike Shop

## 🛒 Live Demo
[View Live Site](https://your-live-site-url.com)

## 📌 Overview
Bike Shop is an e-commerce platform designed for purchasing bicycles online. It features a role-based dashboard for both users and admins, secure authentication, product filtering, and seamless checkout with payment integration.

## ✨ Features
- 🔐 **Authentication**: Secure login and registration (JWT-based authentication)
- 👤 **Role-Based Dashboard**:
  - **Admin**: Manage users, products, and orders
  - **User**: View and track orders, update profile
- 🏷️ **Product Management**:
  - Search, filter, and sort products
  - View product details
  - Manage inventory (Admin only)
- 💳 **Checkout & Payments**: Integration with SurjoPay for secure transactions
- 🔄 **API Integration**: REST API for managing products and orders
- 📱 **Responsive Design**: Optimized for all devices

## 🛠️ Technologies Used
### **Frontend**
- **Next.js** (with TypeScript)
- **Redux Toolkit** (State Management)
- **Ant Design & Tailwind CSS** (UI Components & Styling)

### **Backend**
- **Node.js & Express.js**
- **MongoDB (Mongoose ORM)**
- **JWT Authentication & Bcrypt.js** (Security)
- **Multer** (File Uploads)
- **SurjoPay** (Payment Integration)

## 🚀 Getting Started
### **Prerequisites**
Ensure you have the following installed:
- **Node.js (LTS version)**
- **MongoDB** (Local or cloud-based)

### **Installation & Setup**
#### Clone the repository:
```sh
git clone https://github.com/your-repo-url.git
cd bike-shop
```
#### Install dependencies:
```sh
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```
#### Configure Environment Variables
Create a `.env` file in both the `server/` and `client/` directories and add the required environment variables:
```env
# Backend (.env)
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PAYMENT_GATEWAY_KEY=your-surjopay-key

# Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:5000
```
#### Run the application:
```sh
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev
```
The app should now be running at `http://localhost:3000` (Frontend) and `http://localhost:5000` (Backend).

## 📜 API Endpoints
### **Authentication**
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get access token

### **Products**
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch a single product
- `POST /api/products` - Add a new product (Admin only)
- `PUT /api/products/:id` - Update product details (Admin only)
- `DELETE /api/products/:id` - Delete a product (Admin only)

### **Orders**
- `POST /api/orders` - Place an order
- `GET /api/orders/user/:userId` - Get user orders
- `GET /api/orders/admin` - Get all orders (Admin only)

## 🛠 Deployment
### **Frontend Deployment**
- The frontend is deployed on **Vercel**

### **Backend Deployment**
- The backend is hosted on **Render** (or any other hosting service)

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

## 📜 License
This project is licensed under the MIT License.

---
### 📧 Contact
For any inquiries or support, reach out via [your email or social media].

