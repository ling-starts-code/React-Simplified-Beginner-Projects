// eslint-disable-next-line no-unused-vars
import React from "react";
import "./user.css";

export default function UserCard({ name, phoneNumber, age, address }) {
  return (
    <>
      <div className="card">
        <h2 className="name">{name}</h2>
        <div className="body">
          <div className="label">Age:{age}</div>
          <div className="label">Phone:{phoneNumber}</div>
          <div className="label">Address:{address}</div>
        </div>
      </div>
    </>
  );
}
