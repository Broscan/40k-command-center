import React, { useState } from "react";
import AddUnitForm from "./AddUnitForm";

function Unit(props) {
  const [numberOfUnits, setNumberOfUnits] = useState(0);

  function handleNumberChange(e) {
    setNumberOfUnits(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onDecimateUnit(props.unit, numberOfUnits);
  }
  return (
    <>
      <h2>{props.unit.name}</h2>
      <p>{props.unit.description}</p>
      <p>{props.unit.type}</p>
      <p>Number of units: {props.unit.count}</p>
      {
        <button onClick={() => props.onChangeDeployment(props.unit.id)}>
          {props.unit.deployed ? "Recall" : "Deploy"}
        </button>
      }
      <button onClick={() => props.onRemoveUnit(props.unit)}>Remove</button>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={numberOfUnits}
          onChange={handleNumberChange}
        />
        <button type="submit">Decimate</button>
      </form>
    </>
  );
}

export default Unit;
