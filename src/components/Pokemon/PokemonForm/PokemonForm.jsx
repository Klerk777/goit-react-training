import { Component } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";
import styles from "./PokemonForm.module.scss";
import "react-toastify/dist/ReactToastify.css";

export default class PokemonForm extends Component {
  state = {
    pokemonName: "",
  };

  handleNameChange = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === "") {
      return toast.error("Введите имя покемона.");
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };

  render() {
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="on"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button className={styles.btn} type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}
