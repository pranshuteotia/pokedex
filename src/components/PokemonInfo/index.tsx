interface PokemonInfoProps {
  name: string;
  type: Array<string>;
  height: string;
  weight: string;
}

const PokemonInfo = ({ name, type, height, weight }: PokemonInfoProps) => {
  return (
    <div className="poke-info">
      <h1 className="text-4xl capitalize">{name}</h1>
      <div
        className={`flex my-4 w-4/5 mx-auto ${type.length === 1 && "w-1/3"}`}
      >
        {type.map((type, idx) => (
          <span key={`type-${idx}`} className={`poke-type ${type}`}>
            {type.toLocaleUpperCase()}
          </span>
        ))}
      </div>
      <div className="body-info-wrapper">
        <div className="body-info">
          <span className="height">{height}</span>
          <span className="text-sm text-gray-300 mt-2">height</span>
        </div>
        <div className="body-info">
          <span className="weight">{weight}</span>
          <span className="text-sm text-gray-300 mt-2">weight</span>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
