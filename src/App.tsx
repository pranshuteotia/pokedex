import Display from "components/Display";
import PokemonInfo from "components/PokemonInfo";
import SearchBar from "components/SearchBar";
import PokemonStatsInfo from "components/PokemonStatsInfo";
import { useSelector } from "react-redux";
import { PokemonMetadata } from "types";
import TypeEffectiveness from "components/TypeEffectiveness";

function App() {
  const displaySearch = useSelector((state: any) => state.displaySearch.value);
  const { name, image, type, stats }: PokemonMetadata = useSelector(
    (state: any) => state.pokemonData.value
  );

  return (
    <div className="App">
      <SearchBar displaySearch={displaySearch} />
      <Display name={name} image={image} />
      <PokemonInfo name={name} type={type} />
      <PokemonStatsInfo stats={stats} />
      <TypeEffectiveness />
    </div>
  );
}

export default App;
