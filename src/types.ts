export interface FuseResult {
  item: string;
  refIndex: number;
}

export interface PokemonData {
  id: number;
  name: string;
  type: Array<string>;
  image: string;
  stats: Array<PokemonStats>
  height: string;
  weight: string;
  typeEffectiveness: TypeEffectivenessData;
  bgColor: string;
}

export interface PokemonStats {
  statType: string;
  value: number;
  percentage: number;
}

export interface TypeEffectivenessData {
  superEffective: Array<string>;
  notVeryEffective: Array<string>;
  normalEffective: Array<string>;
}

export enum Effectiveness {
  SUPER_EFFECTIVE = "super-effective",
  NOT_VERY_EFFECTIVE = "not-very-effective",
  NORMAL_EFFECTIVE = "normal-effectiveness",
}