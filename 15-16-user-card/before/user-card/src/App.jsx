// eslint-disable-next-line no-unused-vars
import React from "react";
import UserCard from "./UserCard";
import user from "./user.json";
import Counter from "./Counter";

function App() {
  return (
    <>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
      <Counter />
    </>
  );
}

export default App;
