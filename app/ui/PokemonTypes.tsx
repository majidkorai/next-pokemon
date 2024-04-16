"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { includes, startCase } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonTypes } from "../lib/pokemons.utils";
import { PokemonType, Pokemon } from "../lib/types";
import PokemonsDropdown from "./PokemonsDropdown";

const PokemonCategories = () => {
  const [filteredTypes, setFilteredTypes] = useState<PokemonType[] | undefined>(
    []
  );
  const { data, isLoading, isError } = useQuery<PokemonType[]>({
    queryKey: ["pokemon_types"],
    queryFn: fetchPokemonTypes,
  });

  useEffect(() => {
    setFilteredTypes(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching pokemons</div>;
  }

  const filterTypesByPokemon = (
    selectedPokemon: Pokemon | null | undefined
  ) => {
    if (data === undefined) return;
    if (selectedPokemon) {
      const pokemonTypes = selectedPokemon?.types.map((t) => t.type.name);
      setFilteredTypes([
        ...data?.filter((t: PokemonType) => includes(pokemonTypes, t.name)),
      ]);
    } else {
      setFilteredTypes(data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="col-start-2 text-xl font-semibold">Pokemon Types</h1>
      <div className="mt-5 mb-5 w-80">
        <PokemonsDropdown onPokemonSelected={filterTypesByPokemon} />
      </div>
      <div className="flex flex-wrap">
        {filteredTypes?.map((type: PokemonType, index: number) => (
          <Link href={`/type-details/${type.name}`} key={index}>
            <div className="cursor-pointer flex-auto p-10 m-5 w-64 border flex justify-center items-center border-white rounded-sm">
              <h2>{startCase(type.name)}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonCategories;
