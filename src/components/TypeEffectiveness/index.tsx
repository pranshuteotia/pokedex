import { TypeEffectivenessData } from "types";

interface TypeEffectivenessProps {
  typeEffectiveness: TypeEffectivenessData;
}

const TypeEffectiveness = ({ typeEffectiveness }: TypeEffectivenessProps) => {
  if (!typeEffectiveness) return null;

  return (
    <div className="type-effectiveness">
      <h2>Effectiveness of Types</h2>
      <h3 className="effectiveness">Supper Effective</h3>
      <div className="type-container">
        {typeEffectiveness.superEffective.map((type, idx) => (
          <span key={`sp-eff-${idx}`} className={`poke-type ${type}`}>
            {type}
          </span>
        ))}
      </div>

      <h3 className="effectiveness">Normal Effective</h3>
      <div className="type-container">
        {typeEffectiveness.normalEffective.map((type, idx) => (
          <span key={`nm-eff-${idx}`} className={`poke-type ${type}`}>
            {type}
          </span>
        ))}
      </div>

      <h3 className="effectiveness">Not Very Effective</h3>
      <div className="type-container">
        {typeEffectiveness.notVeryEffective.map((type, idx) => (
          <span key={`nv-eff-${idx}`} className={`poke-type ${type}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TypeEffectiveness;
