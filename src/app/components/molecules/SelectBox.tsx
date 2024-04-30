import React from "react";
import { selectPokemonId } from "../../lib/features/test/pokemonSlice";
import { useAppDispatch } from "../../lib/hook";

type Props = {
  option: object;
};

const SelectBox = (props: Props) => {
  const dispatch = useAppDispatch();
  const pokemonList = props.option || [];

  type Option = {
    id: number;
    name: string;
  };

  // 選択したIDをReduxに保存
  const handleChange = (e: { target: { value: any } }) => {
    dispatch(selectPokemonId(e.target.value));
  };

  return (
    <>
      <select onChange={handleChange} className="mt-4">
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
