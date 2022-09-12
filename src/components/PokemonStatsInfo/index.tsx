import { useEffect } from "react";
import { PokemonStats } from "types";

interface PokemonStatsInfoProps {
  stats: Array<PokemonStats>;
}

const PokemonStatsInfo = ({ stats }: PokemonStatsInfoProps) => {
  const statToShortStatMapping: Record<string, string> = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "S.ATK",
    "special-defense": "S.DEF",
    speed: "SPD",
  };

  useEffect(() => {
    const allProgressBars: NodeListOf<HTMLSpanElement> =
      document.querySelectorAll(".progress-bar");
    stats.forEach((stat, idx) => {
      allProgressBars[idx].style.width = `${stat.percentage}%`;
    });
  });

  return (
    <div className="pokemon-stats-wrapper">
      <h2>Base Stats</h2>
      <ul className="pokemon-stats">
        {stats.map((stat, idx) => (
          <li className="stat-wrapper" key={`stats-${idx}`}>
            <span className="stat-name">
              {statToShortStatMapping[stat.statType]}
            </span>
            <span className="stat-value-wrapper">
              <span className={`progress-bar ${stat.statType}`}></span>
              <span className="stat-value">{stat.value}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonStatsInfo;
