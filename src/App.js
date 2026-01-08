import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
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
    <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", gap: "10px"}}>
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={() => handleSave(index)}>
                  Save Changes
                </button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

