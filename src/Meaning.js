import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
  return (
    <div className= "Meaning">
   <h6>{props.meaning.partOfSpeech}</h6>
   <p>
    {props.meaning.definition}
    <br/>
  
    <Synonyms synonyms={props.meaning.synonyms}/>
   
   <em>
    {props.meaning.example}
    </em>
   </p>
  </div>);
}