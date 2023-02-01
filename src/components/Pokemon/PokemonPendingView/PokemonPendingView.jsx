import styles from "./PokemonPendingView.module.scss";
import { ImSpinner } from "react-icons/im";
import PokemonDataView from "../PokemonDataView/PokemonDataView";
import pendingImage from "../images/pending.png";

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        "official-artwork": {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div className={styles.spinerBox}>
        <ImSpinner size="32" className={styles.iconSpin} />
        Loading...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
