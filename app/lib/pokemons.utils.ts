import { Pokemon, PokemonType } from "@/app/lib/types";

export const fetchPokemonTypes = async (): Promise<PokemonType[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/type");
  const data = await response.json();
  return data.results;
};

export const fetchPokemonTypeDetails = async (
  id: string
): Promise<PokemonType> => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${id}`);
  const data = await response.json();
  return data;
};

export const fetchPokemonDetails = async (id: string): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data: Pokemon = await response.json();
  return data;
};

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await response.json();
  const pokemons: { name: string; url: string }[] = data.results;
  const pokemonsWithDetails: Pokemon[] = [];
  for (let pokemon of pokemons) {
    const details: Pokemon = await fetch(pokemon.url).then((res) => res.json());
    pokemonsWithDetails.push(details);
  }
  return pokemonsWithDetails;
};
