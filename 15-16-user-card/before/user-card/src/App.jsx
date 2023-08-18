// eslint-disable-next-line no-unused-vars
import React from "react";
import UserCard from "./UserCard";
import user from "./user.json";

function App() {
  return (
    <UserCard
      name={user.name}
      phoneNumber={user.phoneNumber}
      age={user.age}
      address={user.address}
    />
  );
}

export default App;
