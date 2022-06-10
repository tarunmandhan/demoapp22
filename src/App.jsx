import React, { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [fullName, setFullName] = useState();
  const inputEvent = (event) => {
    console.log(event.target.value);
    setname(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };

  return (
    <>
      <h1> Hello {fullName} </h1>

      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={inputEvent}
        value={name}
      />

      <button onClick={onSubmit}> Submit 👍</button>
    </>
  );
};

export default App;
