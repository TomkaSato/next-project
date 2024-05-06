import React from "react";
import { selectPokemonId } from "../../lib/features/test/pokemonSlice";
import { useAppDispatch } from "../../lib/hook";

type Option = {
  id: number;
  name: string;
};

type Props = {
  option: Option[];
};

const SelectBox = (props: Props) => {
  const dispatch = useAppDispatch();
  const pokemonList = props.option || [];
  
  // 選択したIDをReduxに保存
  const handleChange = (e: { target: { value: any } }) => {
    dispatch(selectPokemonId(e.target.value));
  };

  return (
    <>
      <select onChange={handleChange} className="mt-4 mb-5">
        <option>選択してください</option>
        {pokemonList.map((pokemon: Option) => (
          <option key={pokemon.id} value={pokemon.id}>
            #{pokemon.id}: {pokemon.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectBox;
