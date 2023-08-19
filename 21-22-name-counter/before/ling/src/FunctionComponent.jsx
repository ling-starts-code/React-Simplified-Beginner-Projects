// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function FunctionComponent() {
  const [name, setName] = useState("Ling");
  const [age, setAge] = useState(0);

  /*   function handleChange(e) {
    console.log("e", e);
    setName(e.target.value);
    // setName("Bella");
  }
  function handleClickMinus() {
    setAge((currentAge) => currentAge - 1);
  }
  function handleClickPlus() {
    setAge((currentAge) => currentAge + 1);
  } */

  return (
    <>
      {/*     <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClickMinus}>-</button> {age}
      <button onClick={handleClickPlus}>+</button> */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>{" "}
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <p>
        My name is {name} and I am {age} years old
      </p>
    </>
  );
}
