import { PokemonData } from "types";
import axios from "axios";
import { FastAverageColor } from "fast-average-color";

export const fetchPokemonData = async (pokemonId: number): Promise<PokemonData> => {

  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  );

  const name = data.name;
  const image = data.sprites.other["official-artwork"].front_default;
  const type = data.types.map((type: any) => type.type.name);
  const stats = data.stats.map((stat: any) => {
    return {
      statType: stat.stat.name,
      value: stat.base_stat,
      percentage: Math.floor((stat.base_stat / 300) * 100),
    };
  });

  const img = new Image();
  img.src = image;
  img.crossOrigin = "anonymous";
  await img.decode();
  const { hex } = new FastAverageColor().getColor(img);

  return { name, image, type, stats, bgColor:hex }
}