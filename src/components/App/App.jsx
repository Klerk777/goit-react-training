import logo from "./logo.svg";
import "./App.css";
import SayMyName from "../Greating/Greating";
import getName from "../Greating/getName";
import MyClassComponent from "../MyClassComponent/MyClassComponent";
import Counter from "../Counter/Counter";

const myName = getName();

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React!</p>
        </header>
      </div>

      <SayMyName name={myName} />
      <MyClassComponent />
      <Counter step={10} initialValue={100} />
    </>
  );
}

export default App;
