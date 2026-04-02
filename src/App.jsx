import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [users, setUsers] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const fetchUsers = async () => {
    setLoadingState(true);
    setErrorState(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setErrorState(error.message);
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>User Directory</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {loadingState && <LoadingSpinner />}

      {errorState && (
        <ErrorMessage message={errorState} onRetry={fetchUsers} />
      )}

      {!loadingState && !errorState && (
        <div className="grid">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              city={user.address.city}
              company={user.company.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;