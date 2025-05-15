// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // El carrito empieza vacío
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Añadir
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

    addOneToCart: (state, action) => {
      const _id = action.payload;
      // Verifica si existe el producto
      const filteredItem = state.items.find((item) => item._id === _id);
      if (filteredItem) {
        filteredItem.quantity += 1;
      }
    },

    // ❌ Deletes
    removeFromCart: (state, action) => {
      const _id = action.payload; // recojo directamente el id
      // Filtra y elimina el producto
      state.items = state.items.filter((item) => item._id !== _id);
    },

    removeOneFromCart: (state, action) => {
      const _id = action.payload;
      // Filtro y recojo el producto a modificar
      const itemFiltrado = state.items.find((item) => item._id === _id);
      // Si existe, eliminar
      if (itemFiltrado) {
        if (itemFiltrado.quantity > 1) {
          itemFiltrado.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item._id !== _id); // si se queda cantidad a 0, lo borro del carrito
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },

    // 🔵 Update
    // Si es necesario, puedes agregar una acción para actualizar cantidades o vaciar el carrito
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const existingProduct = state.items.find((item) => item._id === _id);
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
  },
});

export const {
  addToCart,
  addOneToCart,
  removeFromCart,
  removeOneFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
