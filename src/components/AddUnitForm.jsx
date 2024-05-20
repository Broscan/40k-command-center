import React, { useState } from "react";

function AddUnitForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [count, setCount] = useState(0);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleTypeChange(e) {
    setType(e.target.value);
  }

  function handleCountChange(e) {
    setCount(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        type: type,
        count: count,
      }),
    };

    fetch("http://localhost:3000/units", postOptions);
  }

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
        />
        <input
          type="text"
          placeholder="description"
          onChange={handleDescriptionChange}
          value={description}
        />
        <input
          type="text"
          placeholder="Type"
          onChange={handleTypeChange}
          value={type}
        />
        <input
          type="number"
          placeholder="Count"
          onChange={handleCountChange}
          value={count}
        />

        <button type="submit">Add Unit</button>
      </form>
    </>
  );
}

export default AddUnitForm;
