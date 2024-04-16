import React, { useState } from "react";
import { PokemonDropdownItem, Pokemon } from "@/app/lib/types";
import { useQuery } from "@tanstack/react-query";
import startCase from "lodash/startCase";
import Select from "react-select";
import { fetchPokemons } from "@/app/lib/pokemons.utils";
import { SingleValue } from "react-select";

const PokemonsDropdown = ({
  onPokemonSelected,
}: {
  onPokemonSelected: (selectedPokemon: Pokemon | null | undefined) => void;
}) => {
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonDropdownItem | null>(null);
  const { data, isLoading, isError } = useQuery<Pokemon[]>({
    queryKey: ["pokemons_list"],
    queryFn: fetchPokemons,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching pokemons</div>;
  }

  const handleSelectPokemon = (pokemon: SingleValue<PokemonDropdownItem>) => {
    const selectedPokemon = data?.find((p) => p.name === pokemon?.value);
    setSelectedPokemon(pokemon);
    onPokemonSelected(selectedPokemon);
  };

  return (
    <div>
      <Select
        className="w-80 focus:outline-none border-gray-300 bg-white text-black"
        placeholder="Select a Pokemon to filter types"
        isClearable
        options={data?.map(
          (p) =>
            ({ value: p.name, label: startCase(p.name) } as PokemonDropdownItem)
        )}
        onChange={(selectedOption) => handleSelectPokemon(selectedOption)}
      />
    </div>
  );
};

export default PokemonsDropdown;
