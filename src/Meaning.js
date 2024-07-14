import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import Antonyms from "./Antonyms";
import "./Meaning.css";


export default function Meaning(props){
  return (
    <div className= "Meaning">
        <div className="row">
    <div className="leftSide col">
      <h6>{props.meaning.partOfSpeech}</h6>
      <p>
    {props.meaning.definition}
    </p>
    </div>
    <div className="rightSide col">
    <Synonyms synonyms={props.meaning.synonyms}/>
   <Antonyms antonyms={props.meaning.antonyms}/>
    <Example examples={props.meaning.example}/>
    </div>
  </div>
</div>);
}