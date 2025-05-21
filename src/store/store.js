// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Importar el reducer del carrito
import filtroReducer from "./filtroSlice"; // Importar el reducer del filtro (género)

const store = configureStore({
  reducer: {
    cart: cartReducer, // Agregar el reducer del carrito al store
    filtros: filtroReducer, // Agregar el reducer de filtros al store
  },
});

export default store;
