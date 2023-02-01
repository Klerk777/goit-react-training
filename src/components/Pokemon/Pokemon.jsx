import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import styles from "./Pokemon.module.scss";
import PokemonForm from "./PokemonForm/PokemonForm";
import PokemonInfo from "./PokemonInfo/PokemonInfo";

export default class Pokemon extends Component {
  state = {
    pokemonName: null,
  };

  componentDidMount() {}

  handleFormSubmit = (pokemonName) => {
    console.log("pokemonName :>> ", pokemonName);
    this.setState({ pokemonName });
  };
  render() {
    return (
      <div className={styles.pokemonContainer}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName}></PokemonInfo>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
