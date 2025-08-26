import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="wordSearchImg" aria-hidden="true"></div>
          <h1 className="title">Search&Define</h1>
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
