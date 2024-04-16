"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { PokemonType } from "@/app/lib/types";
import { fetchPokemonTypeDetails } from "@/app/lib/pokemons.utils";
import PokemonTypeDetails from "@/app/ui/PokemonTypeDetails";

const PokemonTypeDetailsPage = ({ params }: { params: { id: string } }) => {
  const Id = params.id;
  const { data, isLoading, error } = useQuery<PokemonType>({
    queryKey: ["pokemon_type_details", Id],
    queryFn: () => fetchPokemonTypeDetails(Id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return data && <PokemonTypeDetails pokemonType={data}></PokemonTypeDetails>;
};

export default PokemonTypeDetailsPage;
