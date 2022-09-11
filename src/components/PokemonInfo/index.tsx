interface PokemonInfoProps {
  name: string;
  type: Array<string>;
}

const PokemonInfo = ({ name, type }: PokemonInfoProps) => {
  return (
    <div className="poke-info">
      <p className="text-4xl">{name}</p>
      <div
        className={`flex my-4 w-4/5 mx-auto ${type.length === 1 && "w-1/3"}`}
      >
        {type.map((type, idx) => (
          <span key={`type-${idx}`} className={`poke-type ${type}`}>
            {type.toLocaleUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonInfo;
