import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return <span>| Antonym: {props.antonyms} </span>;
  } else {
    return null;
  }
}
