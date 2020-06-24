import React, { useState } from "react";

import "./AddPerson.css";

const addPerson = (props) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const nameChangedHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="AddPerson">
      <form>
        <div>
          <legend>Name</legend>
          <input
            type="text"
            name="name"
            onChange={nameChangedHandler}
            value={name || ""}
          />
        </div>
        <div>
          <legend>Age</legend>
          <input
            type="number"
            name="number"
            onChange={ageChangedHandler}
            value={age || ""}
          />
        </div>
      </form>

      <button onClick={() => props.personAdded(name, age)}>Add Person</button>
    </div>
  );
};
export default addPerson;
