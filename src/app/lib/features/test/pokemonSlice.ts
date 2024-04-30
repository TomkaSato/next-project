import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPokemonList: {},
  currentPokemonId: 94, // 初期値は94:ゲンガーを指定
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // 全データ
    pokemonList: (state, action) => {
      state.allPokemonList = action.payload;
    },
    // 選択したポケモンのID
    selectPokemonId: (state, action) => {
      state.currentPokemonId = action.payload;
    },
  },
});

export const { pokemonList, selectPokemonId } = pokemonSlice.actions;
export default pokemonSlice.reducer;
