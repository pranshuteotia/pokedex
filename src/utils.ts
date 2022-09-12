import { PokemonData } from "types";
import { FastAverageColor } from "fast-average-color";
import pokemonData from "pokemonInfo";
import { Effectiveness, TypeEffectivenessData } from "types";

const isAlpha = (ch: string): boolean => {
  return /^[A-Z]$/i.test(ch);
}

const sanitizePokemonName = (pokemonName: string): string => {
  const name: Array<string> = [];

  for(const char of pokemonName) {
    if (char === "♀") name.push("-f");
    else if (char === "♂") name.push("-m");
    else if (isAlpha(char)) name.push(char);
  }

  return name.join("");
}

export const fetchPokemonData = async (pokemonName: string): Promise<PokemonData> => {
  const sanitizedPokemonName = sanitizePokemonName(pokemonName.toLocaleLowerCase());

  const { id, name, type, height, weight, attack, defense, sp_atk, sp_def, speed, type_advantages } = pokemonData[sanitizedPokemonName];
  const image = await import(`images/${sanitizedPokemonName}.png`);

  const imgObj = new Image()
  imgObj.src = image.default
  await imgObj.decode()

  const typeEffectiveness: TypeEffectivenessData = {superEffective: [], normalEffective: [], notVeryEffective: []};
  for(const [type, effectiveness] of Object.entries(type_advantages)) {
    if (effectiveness === Effectiveness.SUPER_EFFECTIVE) {
      typeEffectiveness.superEffective.push(type)

    } else if (effectiveness === Effectiveness.NORMAL_EFFECTIVE) {
      typeEffectiveness.normalEffective.push(type);
      
    } else {
      typeEffectiveness.notVeryEffective.push(type);
    }
  }

  const sanitizedPokemonData: PokemonData = {
    id,
    name,
    height,
    weight,
    type: type.split(" "),
    stats: [
      { statType: "speed", value: speed, percentage: Math.floor((speed/300) * 100)},
      { statType: "attack", value: attack, percentage: Math.floor((attack/300) * 100)},
      { statType: "defense", value: defense, percentage: Math.floor((defense/300) * 100)},
      { statType: "special-attack", value: sp_atk, percentage: Math.floor((sp_atk/300) * 100)},
      { statType: "special-defense", value: sp_def, percentage: Math.floor((sp_def/300) * 100)},
    ],
    image: image.default,
    typeEffectiveness,
    bgColor: new FastAverageColor().getColor(imgObj).hex,
  }

  return sanitizedPokemonData;

}