import React from "react";

const Todo = () => {
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "pink",
          width: "400px",
          padding: 4,
          height: "60px",
          borderRadius: "4px",
        }}
      >
        <input
          type="text"
          style={{
            width: "250px",
            padding: "12px 10px",
            border: "none",
            borderRadius: "4px",
            outline: "none",
          }}
        />
        <button
          style={{
            width: "auto",
            padding: "12px 10px",
            border: "none",
            borderRadius: "4px",
            outline: "none",
          }}
        >
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default Todo;
