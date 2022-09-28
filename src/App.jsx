import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const [lastName, setLastName] = useState("");

  const [fullName, setFullName] = useState("");

  const [lastNameNew, setLastNameNew] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
  };

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              {" "}
              Hello {fullName} {lastNameNew}{" "}
            </h1>

            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={inputEvent}
              value={name}
            />

            <br />

            <input
              type="text"
              placeholder="Enter Your Last Name"
              onChange={inputEventTwo}
              value={lastName}
            />

            <button type="submit"> Submit 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
