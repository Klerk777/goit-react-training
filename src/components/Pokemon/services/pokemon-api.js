function fetchPokemonByName(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

function fetchPokemonById(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с таким id ${id}`));
  });
}

function fetchPokemonByLimit(limit) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error(`Something went wrong...`));
    }
  );
}

const api = {
  fetchPokemonByName,
  fetchPokemonById,
  fetchPokemonByLimit,
};

export default api;
