import React, { useState, useEffect } from "react";
import Unit from "./Unit";

function UnitList() {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/units")
      .then((res) => res.json())
      .then((data) => setUnits(data));
  }, []);

  function handleOnChangeDeployment(unitId) {
    const newUnits = units.map((u) => {
      if (u.id === unitId) {
        u.deployed = !u.deployed;
      }

      return u;
    });

    setUnits(newUnits);
  }

  function handleOnRecallUnit() {}

  function handleOnDecimateUnit() {}

  function handleOnRemoveUnit() {}

  return (
    <>
      <div className="wrapper">
        {units.map((u) => (
          <div key={u.id} className="wrapper-card">
            <Unit
              unit={u}
              description={u.description}
              deployed={u.deployed}
              onChangeDeployment={handleOnChangeDeployment}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default UnitList;
