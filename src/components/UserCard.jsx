import React from "react";

function UserCard({ name, email, city, company }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>City: {city}</p>
      <p>Company: {company}</p>
    </div>
  );
}

export default UserCard;