import React from "react";

function Unit(props) {
  return (
    <>
      <h2>{props.unit.name}</h2>
      <p>{props.unit.description}</p>
      <p>{props.unit.type}</p>
      {
        <button onClick={() => props.onChangeDeployment(props.unit.id)}>
          {props.unit.deployed ? "Recall" : "Deploy"}
        </button>
      }
      <button>Remove</button>
      <input type="number" />
      <button>Decimate</button>
    </>
  );
}

export default Unit;
