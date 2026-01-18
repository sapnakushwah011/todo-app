import React from "react";
import useCounterStore from "./counterStore";
import useUserStore from "./useUserStore";
const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset)


  // Select state & actions separately (performance-friendly)
  const users = useUserStore((state) => state.users);
  const loading = useUserStore((state) => state.loading);
  const fetchUsers = useUserStore((state) => state.fetchUsers);
  const resetUsers = useUserStore((state) => state.resetUsers);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Counter</h1>

      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: 4,
          height: "200px",
          borderRadius: "4px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Count: {count}</h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <button
            style={{
              width: "auto",
              padding: "12px 10px",
              border: "none",
              borderRadius: "4px",
              outline: "none",
            }}
            onClick={increment}
          >
            Increment
          </button>

          <button
            style={{
              width: "auto",
              padding: "12px 10px",
              border: "none",
              borderRadius: "4px",
              outline: "none",
            }}
            onClick={decrement}
          >
            Decrement
          </button>

          <button
            style={{
              width: "auto",
              padding: "12px 10px",
              border: "none",
              borderRadius: "4px",
              outline: "none",
            }}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Async Process */}
      <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: "center"}}>
        <button onClick={fetchUsers}>Fetch Users</button>
        <button onClick={resetUsers}>Reset Users</button>

        <span>{loading && "Loading..."}</span>
        <ul>
          {users.length > 0 && users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Counter;
