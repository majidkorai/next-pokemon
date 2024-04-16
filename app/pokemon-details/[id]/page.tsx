"use client";

import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "@/app/lib/types";
import PokemonDetails from "@/app/ui/PokemonDetails";
import { fetchPokemonDetails } from "@/app/lib/pokemons.utils";

const PokemonDetailsPage = ({ params }: { params: { id: string } }) => {
  const Id = params.id;
  const { data, isLoading, error } = useQuery<Pokemon>({
    queryKey: ["pokemon_details", Id],
    queryFn: () => fetchPokemonDetails(Id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return data && <PokemonDetails pokemon={data}></PokemonDetails>;
};

export default PokemonDetailsPage;
