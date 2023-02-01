import React, { Component } from "react";
import PokemonDataView from "../PokemonDataView/PokemonDataView";

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle",
  };

  componentDidUpdate(pP, pS) {
    const prevPokemonName = pP.pokemonName;
    const nextPokemonName = this.props.pokemonName;

    if (prevPokemonName !== nextPokemonName) {
      this.setState({ status: "pending" });
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextPokemonName}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`There is no Pokemon with name ${nextPokemonName}`)
          );
        })
        .then((pokemon) => this.setState({ pokemon, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }
  render() {
    const { pokemon, error, status } = this.state;

    if (status === "idle") {
      return <div>Enter pokemon's name</div>;
    }
    if (status === "pending") {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === "rejected") {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === "resolved") {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
