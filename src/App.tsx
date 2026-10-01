import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React + Redux + TypeScript</h1>

      <p className="subtitle">
        Redux State Management Counter
      </p>

      <Counter />
    </div>
  );
}

export default App;