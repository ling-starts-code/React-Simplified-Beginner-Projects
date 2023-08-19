import { useState, useEffect } from "react";

export function Child({ notShow }) {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  console.log("Render");

  useEffect(() => {
    console.log("Mount!");
  }, []);
  useEffect(() => {
    console.log("my name is " + name + "and I am " + age + "years old");
  }, [name, age]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(
    () => {
      console.log("My name is " + name);
    },
    [
      // setTimeout(() => {
      //   console.log("timeout");
      // }, 10000),
    ]
  );

  useEffect(() => {
    console.log("Bye");
  }, [notShow]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
