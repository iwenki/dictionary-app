import React from "react";

export default function Synonyms(props){
  if(props.synonyms){
    return <p>Synonym: {props.synonyms[0]} </p>;
  }
 else{return null;}
}