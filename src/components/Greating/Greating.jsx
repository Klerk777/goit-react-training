import "./greating.css";
// import getName from "./getName";

export default function Greating({ name }) {
  return (
    <div className="greating">
      <h1>Hello {name}!</h1>
    </div>
  );
}
