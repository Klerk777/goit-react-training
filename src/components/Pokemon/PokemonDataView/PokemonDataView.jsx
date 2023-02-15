import styles from "./PokemonDataView.module.scss";
export default function PokemonDataView({
  pokemon: { sprites, name, stats, id },
}) {
  return (
    <div className={styles.pockemonBox}>
      <span className={styles.id}>{id}</span>
      <img
        src={sprites.other["official-artwork"].front_default}
        alt={`Pokemon: ${name}`}
        width="520px"
      />
      <span className={styles.pockemonName}>{name.toUpperCase()}</span>
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
