import logo from "./logo.svg";
import "./App.scss";
import Greating from "../Greating/Greating";
// import getName from "../Greating/getName";
import MyClassComponent from "../MyClassComponent/MyClassComponent";
import Counter from "../Counter/Counter";
import Dropdown from "../Dropdown/Dropdown";
import ColorPicker from "../ColorPicker/ColorPicker";
import colorPickerOptions from "../ColorPicker/colorPickerOptions.json";
import ToDo from "../ToDo/ToDo";
import SignUpForm from "../SignUpForm/SignUpForm";

// const myName = getName();

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React!</p>
        </header>
      </div>

      <Greating />
      <MyClassComponent />
      <Counter step={10} initialValue={100} />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
      <ToDo />
      <SignUpForm />
    </>
  );
}

export default App;
