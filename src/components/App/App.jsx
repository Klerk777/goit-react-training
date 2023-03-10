import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Greating from "../Greating/Greating";
// import getName from "../Greating/getName";
import Counter from "../Counter/Counter";
import Dropdown from "../Dropdown/Dropdown";
import ColorPicker from "../ColorPicker/ColorPicker";
import colorPickerOptions from "../ColorPicker/colorPickerOptions.json";
import ToDo from "../ToDo/ToDo";
import SignUpForm from "../SignUpForm/SignUpForm";
// import HackerNewsArticles from "../HackerNewsArticles/HackerNewsArticles";
import Modal from "../Modal/Modal";
import Section from "../ComponentTitle/Section";
import Clock from "../Clock/Clock";
import Tabs from "../Tabs/Tabs";
import tabs from "../Tabs/data/tabs.json";
import Pokemon from "../Pokemon/Pokemon";
import FeadbackForm from "../FeadbackForm/FeadbackForm";

// const myName = getName();

export default class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    console.log("App >> componentDidMount");
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to React!</p>
          </header>
        </div>

        <Greating />
        <Section title="Clock">
          <Clock />
        </Section>
        <Section title="Tabs">
          <Tabs items={tabs} />
        </Section>
        <Section title="Backdrop modal window">
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <div>
                <h3>Modal</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  hic magni accusamus impedit dolor. Ut, explicabo temporibus
                  sequi et, odio, aut labore esse sunt blanditiis assumenda
                  voluptatum quos? Praesentium, itaque.
                </p>
              </div>
              <button
                className="closeBtn"
                type="button"
                onClick={this.toggleModal}
              >
                Close
              </button>
            </Modal>
          )}
          <div>
            <button type="button" onClick={this.toggleModal}>
              Toggle modal
            </button>
          </div>
        </Section>
        <Counter step={10} initialValue={100} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <ToDo />
        <SignUpForm />
        {/* <HackerNewsArticles /> */}
        <Section title="Pokemon">
          <Pokemon />
        </Section>
        <Section title="FeadbackForm">
          <FeadbackForm />
        </Section>
      </>
    );
  }
}
