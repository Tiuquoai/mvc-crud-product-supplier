# CRUD MVC App - Suppliers & Products

This project is a simple **CRUD web application** built with **Node.js**, **Express**, **MongoDB**, and **Mongoose** following the **MVC architecture**.  
It manages **Suppliers** (name, address, phone) and **Products** (name, address, phone, supplierId).  
The app uses **EJS** for server-side rendering and **Bootstrap** for styling.

---

## 🚀 Features
- Manage Suppliers:
  - List all suppliers
  - Add a new supplier
  - Edit supplier details
  - Delete supplier
- Manage Products:
  - List all products with supplier info
  - Add a new product
  - Edit product details
  - Delete product
- User-friendly interface with Bootstrap

---

## 🗂 Project Structure
node-mvc-crud-product-supplier/
├── controllers/
│ ├── productController.js
│ └── supplierController.js
│
├── models/
│ ├── Product.js
│ └── Supplier.js
│
├── node_modules/
│
├── public/
│ └── css/
│ └── style.css
│
├── routes/
│ ├── productRoutes.js
│ └── supplierRoutes.js
│
├── views/
│ ├── partials/
│ │ ├── footer.ejs
│ │ └── header.ejs
│ ├── products/
│ │ ├── edit.ejs
│ │ ├── index.ejs
│ │ └── new.ejs
│ ├── suppliers/
│ │ ├── edit.ejs
│ │ ├── index.ejs
│ │ └── new.ejs
│ └── index.ejs
│
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
├── README.md
└── seed.js
---

## 👤 Author
- Name: **Võ Thị Thương Hoài**  
- Student ID: **22699091**  
- GitHub: [Tiuquoai](https://github.com/Tiuquoai/mvc-crud-product-supplier)
