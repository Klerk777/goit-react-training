import React, { Component } from "react";
import PokemonDataView from "../PokemonDataView/PokemonDataView";
import PokemonErrorView from "../PokemonErrorView/PokemonErrorView";
import PokemonPendingView from "../PokemonPendingView/PokemonPendingView";
import pokemonAPI from "../services/pokemon-api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};
export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(pP, pS) {
    const prevPokemonName = pP.pokemonName;
    const nextPokemonName = this.props.pokemonName;

    if (prevPokemonName !== nextPokemonName) {
      this.setState({ status: Status.PENDING });

      pokemonAPI
        .fetchPokemonById(nextPokemonName)
        .then((pokemon) => this.setState({ pokemon, status: Status.RESOLVED }))
        .catch((error) => this.setState({ error, status: Status.REJECTED }));
    }
  }
  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

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
