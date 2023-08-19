import { useState } from "react";

export default function FunctionComponent() {
  const [name, setName] = useState("Ling");
  const [age, setAge] = useState(0);

  function handleChange() {
    setName("Bella");
  }
  function handleClickMinus() {
    setAge((currentAge) => currentAge - 1);
  }
  function handleClickPlus() {
    setAge((currentAge) => currentAge + 1);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClickMinus}>-</button> {age}
      <button onClick={handleClickPlus}>+</button>
      <p>
        My name is {name} and I am {age} years old
      </p>
    </>
  );
}
