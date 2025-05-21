import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // ** que sea un objeto con los filtros
  filtros: {
    genero: "hombre", // por defecto
    scrollPosition: 0,
    // otros filtros pueden ser añadidos aquí
  },
};

const filtroSlice = createSlice({
  name: "filtros",
  initialState,
  reducers: {
    setGenero: (state, action) => {
      state.filtros.genero = action.payload;
    },
    setScrollPosition: (state, action) => {
      state.filtros.scrollPosition = action.payload;
    },
    resetFiltros: (state) => {
      state.filtros = initialState.filtros;
    },
  },
});

export const { setGenero, setScrollPosition } = filtroSlice.actions;
export default filtroSlice.reducer;
