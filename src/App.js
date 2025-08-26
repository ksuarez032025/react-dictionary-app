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
        <footer className="footer">
          <p>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/kristian-suarez-dev/"
              target="blank"
            >
              Kristian Suarez
            </a>
            <br />
            <a
              href="https://github.com/ksuarez032025/react-dictionary-app"
              target="blank"
            >
              Open-source on GitHub
            </a>{" "}
            &{" "}
            <a
              href="https://dictionary-shecodes-reactproject.netlify.app/"
              target="blank"
            >
              Hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
