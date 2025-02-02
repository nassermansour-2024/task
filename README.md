# Angular 19 Products App

This is an Angular 19 project that fetches products from the FakeStoreAPI and displays them in a grid. Users can also view specific product details by clicking the "Details" button.

## 🚀 Live Demo
[Click here to view the live demo](#) *(Replace with actual link)*

## 📜 Features
- Fetches and displays products from FakeStoreAPI.
- Click on "Details" to view specific product information.
- Uses Angular 19 standalone components and best practices.
- Implements a custom pipe to capitalize the first letter of product descriptions.

## 🛠 Technologies Used
- **Angular 19**
- **TypeScript**
- **Tailwind CSS** (for styling)
- **RxJS** (for handling HTTP requests)
- **FakeStoreAPI** (for product data)

## 📂 Project Structure
```
src/
│── app/
│   ├── navbar/
│   ├── pages/
│   │   ├── footer/
│   │   ├── home/
│   │   ├── not-found/
│   │   ├── product-details/
│   │   ├── products/
│   ├── shared/
│   │   ├── interfaces/
│   │   │   ├── product.ts
│   │   ├── services/
│   │   │   ├── flowbite/
│   │   │   ├── products/
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.config.server.ts
│   ├── app.config.ts
│   ├── app.routes.server.ts
│   ├── app.routes.ts
│── index.html
│── main.server.ts

```

## 🛠 Installation & Running the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/nassermansour-2024/task
cd angular-products-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
ng serve
```

Open your browser and go to `http://localhost:4200/`.

## 📌 API Used
We fetch product data from **FakeStoreAPI**:
```bash
https://fakestoreapi.com/products
```

## 🤝 Contributing
Feel free to submit issues or create pull requests to improve this project.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
Made with ❤️ using Angular 19!

