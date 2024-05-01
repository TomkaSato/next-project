import React from "react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../lib/hook";
import { typeColor } from "src/app/utils/constants";

type Props = {
  data: object;
};

type DataType = {
  id: number;
  name: string;
  img_url: string;
  types: Array<string>;
};

const Card = (props: Props) => {
  const [selectedPokemonData, setSelectedPokemonData] = useState<DataType>();

  // 全データ
  const allPokemonData = props.data || {};

  // Reduxから選択されたIDを取得
  const selectedId = useAppSelector((state) => state.pokemon.currentPokemonId);

  useEffect(() => {
    fetchData();
  }, [selectedId]);

  // 全データの中から選択されたポケモンのデータを取得
  const fetchData = () => {
    const selectedPokemon = Object.values(allPokemonData).find((pokemon) => {
      return pokemon.id == selectedId;
    });
    setSelectedPokemonData(selectedPokemon);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#9ca3af] to-[#f3f4f6] w-[350px] border rounded-xl mx-auto mt-[100px] relative">
        <p className="flex justify-center text-5xl font-bold text-gray-50 px-4 py-2 opacity-70 absolute">
          #{selectedPokemonData?.id}
        </p>
        <div className="mt-3">
          <img
            src={selectedPokemonData?.img_url}
            alt={selectedPokemonData?.name}
          />
        </div>
        <div className="flex justify-center mb-2">
          <p className="font-bold text-4xl opacity-60 mr-2">
            {selectedPokemonData?.name}
          </p>
          <div className="items-end flex">
            {selectedPokemonData?.types.map((type, index) => {
              return (
                <div
                  key={index}
                  className="rounded-xl py-[1px] px-2 mr-[2px] h-fit"
                  style={{ backgroundColor: typeColor(type) }}
                >
                  <img src={`/image/${type}.svg`} alt={type} className="w-6" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
