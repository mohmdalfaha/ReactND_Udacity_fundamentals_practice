import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/* Trying with and without JSX*/

const people = [{ name: "Osamah" }, { name: "Monther" }, { name: "Mohammed" }];

//without JSX
/* 
const element = React.createElement('ol',null,
people.map((person) => (React.createElement('li','null',person.name)))
)
*/

//with JSX

const element = (
  <ol>{people.map(person => <li key={person.name}>{person.name}</li>)}</ol>
);
export default element;

//The above code is converter to 'React.createElement()' method before it's compiled.
