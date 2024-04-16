"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import startCase from "lodash/startCase";
import React, { useMemo } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { Pokemon, PokemonStatData, PokemonStats } from "../lib/types";
import { AxisOptions, Chart } from "react-charts";

const PokemonDetails = ({ pokemon }: { pokemon: Pokemon }) => {
  const router = useRouter();
  const data: PokemonStatData = {
    label: pokemon.name,
    data: pokemon?.stats?.map((stat) => ({
      stat: stat.base_stat,
      name: stat.stat.name,
    })),
  };

  const primaryAxis = useMemo(
    (): AxisOptions<PokemonStats> => ({
      getValue: (datum) => datum.name,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<PokemonStats>[] => [
      {
        getValue: (datum) => datum.stat,
        elementType: "bar",
      },
    ],
    []
  );
  return (
    <div className="flex flex-nowrap flex-col">
      <div className="grid grid-cols-3 w-full gap-2 justify-items-center">
        <Link href="#" onClick={router.back} className="justify-self-start">
          <SlArrowLeft />
        </Link>
        <h1 className="col-start-2 text-xl font-semibold">
          {startCase(pokemon?.name)}
        </h1>
      </div>
      <div className="self-center">
        <Image
          src={pokemon?.sprites.front_default}
          width="200"
          height="200"
          alt={pokemon?.name}
        />
      </div>
      <div className="h-80 w-80 self-center">
        <Chart
          options={{
            data: [data],
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
      <div className="flex flex-wrap align-center justify-center">
        <div className="flex flex-wrap">
          <div className="flex-auto p-5 m-5 w-64 border text-center items-center border-white rounded-sm">
            <label className="block font-semibold mb-5 underline">Types</label>
            <h3>
              {pokemon?.types.map((t) => startCase(t.type.name)).join(", ")}
            </h3>
          </div>
          <div className="flex-auto p-5 m-5 w-64 border text-center items-center border-white rounded-sm">
            <label className="block font-semibold mb-5 underline">
              Species
            </label>
            <h3>{startCase(pokemon?.species.name)}</h3>
          </div>
          <div className="flex-auto p-5 m-5 w-64 border text-center items-center border-white rounded-sm">
            <label className="block font-semibold mb-5 underline">
              Abilities
            </label>
            <h3>
              {pokemon?.abilities
                .map((m) => startCase(m.ability.name))
                .join(", ")}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonDetails;
