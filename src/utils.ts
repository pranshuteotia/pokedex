import { PokemonData } from "types";
import { FastAverageColor } from "fast-average-color";
import pokemonData from "pokemonInfo";
import { Effectiveness, TypeEffectiveness } from "types";

export const fetchPokemonData = async (pokemonName: string): Promise<PokemonData> => {
  const { id, name, type, height, weight, attack, defense, sp_atk, sp_def, speed, type_advantages } = pokemonData[pokemonName];
  const image = await import(`images/${name}.png`);

  const imgObj = new Image()
  imgObj.src = image.default
  await imgObj.decode()

  const typeAdvantages: TypeEffectiveness = {superEffective: [], normalEffective: [], notVeryEffective: []};
  for(const [type, effectiveness] of Object.entries(type_advantages)) {
    if (effectiveness === Effectiveness.SUPER_EFFECTIVE) {
      typeAdvantages.superEffective.push(type)

    } else if (effectiveness === Effectiveness.NORMAL_EFFECTIVE) {
      typeAdvantages.normalEffective.push(type);
      
    } else {
      typeAdvantages.notVeryEffective.push(type);
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
    typeAdvantages,
    bgColor: new FastAverageColor().getColor(imgObj).hex,
  }

  return sanitizedPokemonData;

}