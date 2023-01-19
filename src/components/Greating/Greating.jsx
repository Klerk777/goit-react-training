import "./greating.css";

export default function Greating({ name }) {
  return (
    <div className="greating">
      <h1>Hello {name}!</h1>
    </div>
  );
}

Greating.defaultProps = {
  name: "Klerk",
};
