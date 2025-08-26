import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // API Documentation: https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "c3650d7d0ad3c75tcafd67c27c4o8bd0";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <div className="hint">Suggested words: Sunset, Book, Thunderstorm</div>
      </section>
      <Results results={results} />
    </div>
  );
}
