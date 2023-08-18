// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return <p onClick={handleClick}>{count}</p>;
}
