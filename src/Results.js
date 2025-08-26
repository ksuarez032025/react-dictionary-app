import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h3 className="word">{props.results.word}</h3>
          <p className="phonetic">{props.results.phonetic}</p>
        </section>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <section key={index}>
              <Meaning meaning={meanings} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
