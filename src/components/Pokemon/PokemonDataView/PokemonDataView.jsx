export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      <img
        src={sprites.other["official-artwork"].front_default}
        alt={`Pokemon: ${name}`}
        width="420px"
      />

      <h2>{name.toUpperCase()}</h2>
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
