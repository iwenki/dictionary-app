import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary(props) {
  let [Keyword, setKeyword] = useState(props.defaultKeyword);
  let [Definitions, setDefinitions] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleApi(response) {
    setDefinitions(response.data);
  }
  function search() {
    let apiKey = "cbc90ba0a21t28a990f44b7f6f3ea68o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${Keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleApi);
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
        <h4>What word are you thinking about?</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            autoFocus={true}
            defaultValue={props.defaultKeyword}
          />
        </form>
        <Result results={Definitions} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
