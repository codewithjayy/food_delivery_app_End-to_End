# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



```
Food_Delivery_App
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  └─ icons.svg
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ afghani-chicken.jpg
│  │  ├─ Butter-Chicken.jpg
│  │  ├─ cham-cham.jpg
│  │  ├─ channa-bhatura.jpg
│  │  ├─ chicken-65.jpg
│  │  ├─ chicken-biryani.jpg
│  │  ├─ Chicken-Handi.jpg
│  │  ├─ chill_boy.png
│  │  ├─ Gajar-Ka-Halwa.jpg
│  │  ├─ Gulab-Jamun.jpg
│  │  ├─ Matar-Paneer.jpg
│  │  ├─ Misal-Pav.webp
│  │  ├─ Non-Veg-thali.jpg
│  │  ├─ Pav-Bhaji.jpg
│  │  ├─ Rasmalai.jpg
│  │  ├─ SAMAI-IDLI.webp
│  │  ├─ Vada-Pav.webp
│  │  ├─ Veg-Momos.jpg
│  │  ├─ veg-thali.jpg
│  │  └─ white_sauce_pasta.jpg
│  ├─ component
│  │  ├─ About
│  │  │  ├─ About.css
│  │  │  └─ About.jsx
│  │  ├─ Card
│  │  │  ├─ Card.css
│  │  │  └─ Card.jsx
│  │  ├─ Contact
│  │  │  ├─ Contact.css
│  │  │  └─ Contact.jsx
│  │  ├─ Footer
│  │  │  ├─ Footer.css
│  │  │  └─ Footer.jsx
│  │  ├─ Home
│  │  │  ├─ Home.css
│  │  │  └─ Home.jsx
│  │  ├─ Login
│  │  │  ├─ login.css
│  │  │  └─ login.jsx
│  │  ├─ Navbar
│  │  │  ├─ Navbar.css
│  │  │  └─ Navbar.jsx
│  │  └─ NotFound.jsx
│  ├─ main.jsx
│  ├─ Register
│  │  ├─ register.css
│  │  └─ resgister.jsx
│  └─ Routing
│     └─ Routing.jsx
└─ vite.config.js

```