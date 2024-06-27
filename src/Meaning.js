import React from "react";

export default function Meaning(props){
  return (
    <div className= "Meaning">
   <h6>{props.meaning.partOfSpeech}</h6>
   <p>
    {props.meaning.definition}
    <br/>
   <em>
    {props.meaning.example}
    </em>
   </p>
  </div>);
}