// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Importar el reducer del carrito

const store = configureStore({
  reducer: {
    cart: cartReducer, // Agregar el reducer del carrito al store
  },
});

export default store;
