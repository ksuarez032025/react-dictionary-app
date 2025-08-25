import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Search <br />& Define
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Kristian Suarez</footer>
      </div>
    </div>
  );
}

export default App;
