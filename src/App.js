import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    setItems([...items, input]);
    setInput("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(items[index]); // pre-fill input
  };

  const handleSave = (index) => {
    if (!editValue.trim()) return;

    const updatedItems = [...items];
    updatedItems[index] = editValue;
    setItems(updatedItems);

    setEditIndex(null);
    setEditValue("");
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "2px solid blue",
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "6px 10px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Add
      </button>

      <ul
        style={{
          background: "gray",
          width: "300px",
          height: "100px",
          padding: "5px",
        }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    border: "2px solid blue",
                  }}
                />
                <button
                  onClick={() => handleSave(index)}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                {item}
                <button
                  onClick={() => handleEdit(index)}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "blue",
                    color: "white",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    padding: "6px 10px",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
