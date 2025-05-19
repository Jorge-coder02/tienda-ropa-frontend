# 📌🎨 Devflix (Cartelera películas)

[![Devflix](https://img.shields.io/badge/Status-Complete-green)](https://github.com/Jorge-coder02/dexflix-frontend)
[![Licencia](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

🔗 **Visitar:** [Ver en vivo](https://dexflixcinema.netlify.app/)

## 🚀 Tecnologías Principales

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-20.14.0-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18.2-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0.8-47A248?logo=mongodb&logoColor=white)

## ✨ Características Destacadas

- ✅ Optimización automática de imágenes (WebP)
- ✅ Loading spinner de carga en peticiones al back
- ✅ Diseño responsive con Tailwind CSS

## 📦 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/Jorge-coder02/devflix-frontend.git
cd devflix-frontend
```

2. **Instalar dependencias**

```bash
npm install
```

o si usas Yarn

```bash
yarn install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

## El servidor estará disponible en:

## http://localhost:3000

## 🗂️ Estructura del Proyecto

```plaintext
📦 root
├── 📁 public/
│   ├── 📁 images/         # Imágenes globales
│   └── 📁 fonts/          # Fuentes personalizadas
│
├── 📁 src/
│   ├── 📁 components/
│   │
│   ├── 📁 features/
│   │
│   ├── 📁 hooks/
│   │   ├── useAuth.jsx     # Hook de autenticación
│   │
│   └── 📁 pages/          # React Router
│
├── ⚙️ .env.local         # Variables locales (gitignore)
├── 🎨 tailwind.config.js # Configuración de Tailwind
└── 📜 README.md          # Archivo que estás leyendo
```

# Versiones

- React: `19.1.0`
- Tailwind CSS: `3.3.3`

## Dependencias

- React Router: `7.6.0`
- React Redux: `9.2.0`
- React Redux Toolkit: `2.8.1`
- axios: `1.9.0`
- react-router-dom: `7.6.0`
- styled-components: `6.1.18`

## Dependencias de desarrollo:

- eslint: `9.25.0`
- postcss: `8.4.21`

### Otras tecnologías usadas:

UpTimeRobot: Monitorear el backend
Cloudinary: Alojar fotos de la API
API propia de donde se proveen los productos
