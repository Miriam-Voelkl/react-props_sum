import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={3} valueB={5} />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
  //const sum = valueA + valueB * 1;
  //return <h1>{sum}</h1>;
}
