import React from "react";

export default function Synonyms(props){
  if(props.synonyms){
    return <span>Synonym: {props.synonyms[0]} </span>;
  }
 else{return null;}
}