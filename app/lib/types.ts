export type PokemonType = {
  name: string;
  names: { name: string; id: number }[];
  pokemon: { pokemon: Pokemon }[];
};

export type Pokemon = {
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  species: { name: string };
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
};

export type PokemonDropdownItem = {
  label: string;
  value: string;
};

export type PokemonStats = {
  name: string;
  stat: number;
};

export type PokemonStatData = {
  label: string;
  data: PokemonStats[];
};
