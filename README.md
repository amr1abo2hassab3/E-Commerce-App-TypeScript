## 🏪 React E-Commerce App

A modern React + TypeScript E-commerce application that provides a full online shopping experience.  
Users can browse products, manage carts, place orders, and make secure payments — all with responsive design and smooth user experience.

---

## ✨ Key Features

# 🔐 Authentication System
✅User registration and login
✅Password recovery (forgot password)
✅Account management and profile updates
✅Secure password change functionality

# 🏪 Store Frontend
✅Home page with featured products and promotions
✅Product catalog with detailed filtering
✅Category and brand browsing
✅Product details with images, descriptions, and reviews
✅Shopping cart management

# 💳 Order Management
✅Complete checkout process
✅Visa payment integration
✅Cash on delivery option
✅Order history and tracking
✅Order status updates

# 🎛️ Advanced Functionality
✅Product search and advanced filtering
✅Responsive design for all devices
✅Wishlist functionality
✅Product reviews and ratings
✅Inventory management indicators


---

## 📦 Built With

* **React 19**
* **TypeScript**
* **Vite**
* **React Router DOM**
* **Formik & Yup**
* **Tailwind CSS**
* **Axios**
* **React Query (TanStack)**
* **Redux  (Redux toolkit)**
* **jwt-decode**
* **react-hot-toast**

---

## 📦 Install & Run

### 1️⃣ Install dependencies:

```bash
npm install
```

### 2️⃣ Run development server:

```bash
npm run dev
```

### 3️⃣ Build production version:

```bash
npm run build
```

---

## 📌 State Management
App state is handled using:**

* React useState hooks
* React Query

# States Managed:
* Modal open/close states
* Notes list state fetched from API
* Add / Edit note form states
* Form validation errors
* Loading and error states

---

## 📁 main Project Structure
```
src/
├── assets/
├── Components/
│   ├── auth/
│   ├── errors/
│   ├── ui/
├── config/
├── context/
├── data/
├── hooks/
│   ├── custom/
├── interface/
├── lib/
├── pages/
│   ├── Layout.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── HomePage.tsx
│   ├── Products.tsx
│   ├── Category.tsx
│   ├── Brand.tsx
│   └── PageNotFound.tsx
├── router/
│   └── index.tsx
├── types/
├── validation/
└── main.tsx
```

---

## 📌 Main Files
* `HomePage.tsx` — main logic for notes CRUD and UI
* `Login.tsx` — login page with form validation and auth
* `Register.tsx` — user registration page
* `router/index.tsx` — app routing with protected routes
* `Components/ui/Modal.tsx` — reusable modal component
* `validation/index.ts` — validation schemas & functions
* `config/axios.config.ts` — axios instance with interceptors

---

### 🎯 Core Pages & Functionality
## 🏠 Home Page
Featured products slider
Special offers and promotions
Category navigation
New arrivals section

## 📦 Products Section
Product listing with grid/list views
Advanced filtering by category, brand, price, etc.
Sorting options (price, popularity, newest)
Search functionality with autocomplete

## 🔍 Product Details
* High-quality image gallery
* Product specifications
* Customer reviews and ratings
* Stock availability indicator
* Add to cart and wishlist buttons

## 🛒 Shopping Cart
* Cart items with quantity adjustment
* Price summary with discounts
* Promo code application
* Save for later functionality

## 👤 User Account
* Registration and login forms
* Profile management
* Order history with status tracking
* Address book management
* Password change functionality

## 💵 Checkout Process
* Multi-step checkout (shipping, payment, review)
* Address selection/creation
* Payment method selection (Visa, Cash on Delivery)
* Order confirmation and tracking

## 🔐 Authentication Flow
* Registration - Create new account with email verification
* Login - Secure authentication with JWT tokens
* Password Recovery - Reset password via email
* Session Management - Automatic token refresh
* Protected Routes - Secure access to user-specific content

## 🗃️ API Integration
* Products - Fetch, filter, and search products
* Categories - Get categories and subcategories
* Brands - Retrieve brand information
* Authentication - User registration, login, and token management
* Cart - Add, remove, and update cart items
* Orders - Create and retrieve order history
* Payments - Process Visa payments and create cash orders

## 📱 Responsive Design
* Mobile-first approach
* Tablet and desktop optimized layouts
* Touch-friendly interface elements
* Adaptive images and media

📌 Future Improvements
* Social login (Google, Facebook)
* Multi-language support
* dashboard to control App


---

## 📎 Demo

> *https://e-commerce-app-type-script-6tp8hxvsc-amr-abo-hassabs-projects.vercel.app*

---



