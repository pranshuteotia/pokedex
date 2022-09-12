import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSwipeable } from "react-swipeable";
import { useSelector, useDispatch } from "react-redux";
import {
  hideSearch,
  showSearch,
  toggleSearch,
} from "reducers/searchStatusReducer";

interface DisplayProps {
  name: string;
  image: string;
  bgColor: string;
}

const Display = ({ name, image, bgColor }: DisplayProps) => {
  const dispatch = useDispatch();
  const searchDisplayed = useSelector(
    (state: any) => state.displaySearch.value
  );

  const handlers = useSwipeable({
    onSwipedUp: () => hideSearchBar(),
    onSwipedDown: () => displaySearchBar(),
    preventScrollOnSwipe: true,
  });

  const toggleSearchBar = (): any => dispatch(toggleSearch());
  const displaySearchBar = (): any => dispatch(showSearch());
  const hideSearchBar = (): any => dispatch(hideSearch());

  return (
    <div
      className="display-area"
      title={name}
      style={{ backgroundColor: bgColor }}
      {...handlers}
    >
      <FontAwesomeIcon
        onClick={toggleSearchBar}
        className="close-search rounded-full"
        icon={searchDisplayed ? faChevronUp : faChevronDown}
      />
      <img src={image} alt={name} className="pokemon-img" />
    </div>
  );
};

export default Display;
