import styles from "./PokemonDataView.module.scss";

export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <h2>{name.toUpperCase()}</h2>
      <img
        src={sprites.other["official-artwork"].front_default}
        alt={`Pokemon: ${name}`}
        width="320px"
      />

      <h2>{name}</h2>
      <ul>
        {stats.map((entry) => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
