"use client";

import React from "react";
import Link from "next/link";
import { includes, startCase } from "lodash";
import { SlArrowLeft } from "react-icons/sl";
import { PokemonType } from "../lib/types";

const PokemonTypeDetails = ({ pokemonType }: { pokemonType: PokemonType }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const typeName = startCase(pokemonType?.name);
  const filteredPokemon = pokemonType?.pokemon?.filter((p) =>
    includes(p.pokemon.name, searchTerm)
  );
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 w-full gap-2 justify-items-center">
        <Link href="/" className="justify-self-start">
          <SlArrowLeft />
        </Link>
        <h1 className="col-start-2 text-xl font-semibold">
          All Pokemons of type {`"${typeName}"`}
        </h1>
      </div>
      <div className="mt-5 mb-5 w-80">
        <input
          type="text"
          placeholder={`Search Pokemons in type ${typeName}`}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-gray-300 bg-white h-10 w-full px-5 pr-16 rounded-lg text-sm text-black focus:outline-none"
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filteredPokemon.map((pokemon) => (
          <Link
            href={`/pokemon-details/${pokemon?.pokemon?.name}`}
            key={pokemon.pokemon.name}
          >
            <div className="cursor-pointer flex-auto p-10 m-5 w-64 border flex justify-center items-center border-white rounded-sm">
              <h3>{startCase(pokemon?.pokemon?.name)}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default PokemonTypeDetails;
