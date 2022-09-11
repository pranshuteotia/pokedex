export interface FuseResult {
  item: string;
  refIndex: number;
}

export interface PokemonData {
  name: string;
  type: Array<string>;
  image: string;
  stats: Array<PokemonStats>
  bgColor: string;
  
}

export type PokemonType = {
  BUG: "bug",
  DARK: "dark",
  DRAGON: "dragon",
  ELECTRIC: "electric",
  FAIRY: "fairy",
  FIGHTING: "fighting",
  FIRE: "fire",
  FLYING: "flying",
  GHOST: "ghost",
  GRASS: "grass",
  GROUND: "ground",
  ICE: "ice",
  NORMAL: "normal",
  POISON: "poison",
  PSYCHIC: "psychic",
  ROCK: "rock",
  STEEL: "steel",
  WATER: "water",
}

export type Stat = {
  HP: "hp",
  ATK: "atk",
  DEF: "def",
  SPD: "spd",
  SPATK: "spatk",
  SPDEF: "spdef"
}

export interface PokemonStats {
  statType: string;
  value: number;
  percentage: number;
}