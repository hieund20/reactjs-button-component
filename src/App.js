import "./App.css";
import Button from "./lib/component/Button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "5rem",
      }}
    >
      <p>Wow, look at this component library.</p>
      <h5>A notification badge:</h5>
      <br />
      <h5>A button:</h5>
      <Button text="Hello"/>
    </div>
  );
}

export default App;
