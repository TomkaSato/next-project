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

  type PokemonDataType = {
    id: number;
    name: string;
    img_url: string;
    types: string[];
  };

  type PokemonListType = {
    [key: number]: PokemonDataType;
  };

  useEffect(() => {
    getData();
  }, []);

  // 全データを取得してReduxに保存
  const getData = async () => {
    try {
      const pokemonData: PokemonDataType[] = [];
      const promises = [];

      for (let i = 1; i <= 151; i++) {
        promises.push(fetchPokemonData(i)); // データ取得を並列で実行
      }
      const results = await Promise.all(promises);

      results.forEach((result, index) => {
        pokemonData[index + 1] = result; // 取得したデータを配列に追加
      });

      dispatch(pokemonList(pokemonData));
    } catch (error) {
      console.error("getDataエラー:", error);
    }
  };

  // 指定された番号のポケモンのデータを取得
  const fetchPokemonData = async (i: number) => {
    try {
      const [res, speciesRes] = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`),
      ]);

      return {
        id: res.data.id,
        name: speciesRes.data.names[0].name,
        img_url: res.data.sprites.other["official-artwork"].front_default,
        types: res.data.types.map((item: DataType) => item.type.name),
      };
    } catch (error) {
      console.error("fetchPokemonDataエラー:", error);
      throw error;
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
  const allPokemonList: PokemonListType = useAppSelector(
    (state) => state.pokemon.allPokemonList
  );

  // ポケモンのidと名前を返す
  const selectBoxOption = Object.keys(allPokemonList).map((key: string) => {
    const { id, name } = allPokemonList[parseInt(key)];
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
