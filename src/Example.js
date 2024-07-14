import React from "react";
import "./Example.css";

export default function Example(props){
if (props.examples) {
  return <p>Example: "<em className="example">{props.examples}</em>" </p>;
} else {
  return null;
}
}
