"use client";

import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hook";
import { pokemonList } from "../lib/features/test/pokemonSlice";
import Start from "../components/atoms/Start";
import Card from "../components/molecules/Card";
import SelectBox from "../components/molecules/SelectBox";
import Button from "../components/atoms/Button";

const MainPage = () => {
  const dispatch = useAppDispatch();

  type DataType = {
    type: {
      name: string;
    };
  };

  type pokemonDataType = {
    id: number;
    name: string;
    img_url: string;
    types: string[];
  };

  useEffect(() => {
    getData();
  }, []);

  // 全データを取得して必要データのみReduxに保存
  const getData = async () => {
    try {
      const pokemonData: pokemonDataType[] = [];

      for (let i = 1; i <= 151; i++) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const speciesRes = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${i}`
        );

        const obj = {
          id: res.data.id,
          name: speciesRes.data.names[0].name,
          img_url: res.data.sprites.other["official-artwork"].front_default,
          types: res.data.types.map((item: DataType) => item.type.name),
        };
        pokemonData[i] = obj;
      }
      dispatch(pokemonList(pokemonData));
    } catch (error) {
      console.error("エラー：", error);
    }
  };

  // ボタンのテキストを取得
  const currentButtonText = useAppSelector(
    (state) => state.button.currentButtonText
  );

  // 開始前かどうか
  const isStart = () => {
    return currentButtonText === "Start";
  };

  // Reduxからポケモンのデータを取得
  const allPokemonList = useAppSelector(
    (state) => state.pokemon.allPokemonList
  );

  // ポケモンのidと名前を返す
  const selectBoxOption = Object.keys(allPokemonList).map((key) => {
    const { id, name } = allPokemonList[key];
    return { id, name };
  });

  return (
    <div className="text-center">
      {isStart() && <Start />}
      {!isStart() && (
        <>
          <Card data={allPokemonList} />
          <SelectBox option={selectBoxOption} />
        </>
      )}
      <Button text={currentButtonText} />
    </div>
  );
};

export default MainPage;
