import Display from "components/Display";
import PokemonInfo from "components/PokemonInfo";
import SearchBar from "components/SearchBar";
import PokemonStatsInfo from "components/PokemonStatsInfo";
import { useDispatch, useSelector } from "react-redux";
import { PokemonData } from "types";
import TypeEffectiveness from "components/TypeEffectiveness";
import { useEffect } from "react";
import { fetchPokemonData } from "utils";
import pokemon from "pokemon";
import { setPokemonData } from "reducers/pokemonDataReducer";

function App() {
  const dispatch = useDispatch();

  const displaySearch = useSelector((state: any) => state.displaySearch.value);
  const { name, image, type, stats, bgColor, height, weight }: PokemonData =
    useSelector((state: any) => state.pokemonData.value);

  useEffect(() => {
    (async () => {
      const randomPokemonName = pokemon
        .random()
        .replaceAll("'", "")
        .toLocaleLowerCase();
      const data = await fetchPokemonData(randomPokemonName);
      dispatch(setPokemonData(data));
    })();
  }, [dispatch]);

  return (
    <div className="App">
      <SearchBar displaySearch={displaySearch} />
      <Display name={name} image={image} bgColor={bgColor} />
      <PokemonInfo name={name} type={type} height={height} weight={weight} />
      <PokemonStatsInfo stats={stats} />
      <TypeEffectiveness />
    </div>
  );
}

export default App;
