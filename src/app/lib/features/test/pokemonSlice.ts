import { createSlice } from "@reduxjs/toolkit";

type PokemonDataType = {
  id: number;
  name: string;
  img_url: string;
  types: string[];
};

interface InitialState {
  allPokemonList: { [key: number]: PokemonDataType };
  currentPokemonId: number;
}

const initialState: InitialState = {
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
