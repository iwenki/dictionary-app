import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return <p className="opposites">Antonym: {props.antonyms} </p>;
  } else {
    return null;
  }
}
