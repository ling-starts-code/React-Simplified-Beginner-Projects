import { useState, useEffect } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("re-render");
  });

  useEffect(() => {
    console.log("Hi");
    // every time our component unmount AKA being removed, it calls this return function
    // this return calls every time useEffect rerun
    // this useEffect will never run twice which means this return never gets called on re-renders
    // but it's always get called on unmount
    // unmount means remove this component from this page
    // in this case it means every time when I click hide
    return () => {
      console.log("Bye");
    };
  }, []);

  useEffect(() => {
    console.log(`my name is ${name}  and I am ${age} years old`);
  }, [name, age]);

  useEffect(() => {
    document.title = name;
    // setup a timeout
    // comment every other unrelated logs out to see what this log is
    // clean up this timeout if this timeout has not run yet

    // if we had a 1 sec or greater delay, the timeout will run
    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`);
    });
    // if we change our name BEFORE this timeout runs
    // we will clear it, which means it just immediately stops and can never run
    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

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
