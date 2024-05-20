import React, { useState, useEffect } from "react";
import Unit from "./Unit";

function UnitList() {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/units")
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

  function handleOnDecimateUnit(unitToDecimate, amount) {
    console.log(unitToDecimate, amount);

    // TODO: implement if units < 0

    if (unitToDecimate.count >= amount) {
      let tempUnits = [...units];

      const unitToChange = tempUnits.find((u) => u.id === unitToDecimate.id);

      unitToChange.count = Number(unitToChange.count) - amount;

      setUnits(tempUnits);
    }
  }

  function handleOnRemoveUnit(unitToDelete) {
    const deleteOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`http://localhost:3000/units/${unitToDelete.id}`, deleteOptions);
  }

  return (
    <>
      <div className="wrapper">
        {units.map((u) => (
          <div key={u.id} className="wrapper-card">
            <Unit
              unit={u}
              description={u.description}
              deployed={u.deployed}
              count={u.count}
              onChangeDeployment={handleOnChangeDeployment}
              onRemoveUnit={handleOnRemoveUnit}
              onDecimateUnit={handleOnDecimateUnit}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default UnitList;
