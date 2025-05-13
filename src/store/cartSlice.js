// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // El carrito empieza vacío
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      // Verifica si el producto ya está en el carrito
      const existingProduct = state.items.find(
        (item) => item._id === product._id
      );

      if (existingProduct) {
        // Si el producto ya existe, solo aumenta la cantidad
        existingProduct.quantity += 1;
      } else {
        // Si no existe, agrega el producto con cantidad 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { _id } = action.payload;
      // Filtra el producto a eliminar
      state.items = state.items.filter((item) => item._id !== _id);
    },
    // Si es necesario, puedes agregar una acción para actualizar cantidades o vaciar el carrito
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const existingProduct = state.items.find((item) => item._id === _id);
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
