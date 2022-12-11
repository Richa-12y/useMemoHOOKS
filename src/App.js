import logo from "./logo.svg";
import "./App.css";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>useMemo</b> Skipping expensive recalculations.
        </p>
        <a
          className="App-link"
          href="https://hashnode.com/@Richa000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join me to Learn React
        </a>
        <Container />
      </header>
    </div>
  );
}

export default App;
