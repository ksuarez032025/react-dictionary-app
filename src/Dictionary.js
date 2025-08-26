import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import { createClient } from "pexels";
import "./Dictionary.css";

const pexelsClient = createClient(process.env.REACT_APP_PEXELS_KEY);

export default function Dictionary() {
  let [keyword, setKeyword] = useState("hello");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState([]);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function search() {
    // SheCodes Dictionary API Documentation: https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "c3650d7d0ad3c75tcafd67c27c4o8bd0";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // Pexels API Documentation: https://www.pexels.com/api/documentation/?#photos-search
    pexelsClient.photos
      .search({ query: keyword, per_page: 6 })
      .then((res) => setPhotos(res.photos))
      .catch(console.error);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2 className="search_title">What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              placeholder="Try 'thunderstorm'"
            />
          </form>
        </section>

        <Results results={results} />

        {photos.length > 0 && (
          <section className="photos">
            {photos.map((p) => (
              <a key={p.id} href={p.url} target="blank" rel="noreferrer">
                <img src={p.src.medium} alt={p.alt || keyword} />
              </a>
            ))}
          </section>
        )}
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
