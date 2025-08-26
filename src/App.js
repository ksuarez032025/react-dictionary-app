import Dictionary from "./Dictionary";
import word_search_img from "./images/word_search_img.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={word_search_img}
            alt="Word Search"
            className="wordSearchImg"
          />
          <h1>Search&Define</h1>
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
