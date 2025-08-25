import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
          <br />
          <strong>Example: </strong>
          <em>{props.meaning.example}</em>
        </p>
      </div>
    </div>
  );
}
