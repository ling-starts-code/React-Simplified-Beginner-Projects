import React, { useEffect, useState } from "react";
import { User } from "./User.jsx";

const LoadingText = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {users.length > 0 && (
        <>
          <h1>User List</h1>
          <ul>
            {users.map((user) => (
              <User key={user.id} {...user} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default LoadingText;
