import react, { useEffect, useState } from "react";
import "./index.css"

function App() {
  // first i will create a array of objects which will have ids bg-color
  // i will create a card.
  // state for storing the ids.
  // functions for select and unselect.

  const [selectedItem, setSelectedItem] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const data = [
    {
      id: 1,
      label: "Box 1",
    },
    {
      id: 2,
      label: "Box 2",
    },
    {
      id: 3,
      label: "Box 3",
    },
    {
      id: 4,
      label: "Box 4",
    },
    {
      id: 5,
      label: "Box 5",
    },
    {
      id: 6,
      label: "Box 6",
    },
    {
      id: 7,
      label: "Box 7",
    },
    {
      id: 8,
      label: "Box 8",
    },
    {
      id: 9,
      label: "Box 9",
    },
  ];

  const handleSelect = (id) => { 
    if (id === 1 || id > selectedId) {
      setSelectedId(id)
      setSelectedItem(prev => [...prev, id]);
    }
  };

  const handleUnselect = () => {
    for (let i=0; i < selectedItem.length; i++) {
      let filtered = selectedItem.pop();
      console.log("filtered", filtered);
      setSelectedItem(filtered);
    }
    setSelectedId("");
  }

  useEffect(() => {
    if (selectedItem.length === 9) {
      handleUnselect();
    }
  }, [data, selectedItem])

  return (
    <>
      <div className="container"
      >
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className="box"
            style={{
              backgroundColor: selectedItem.length > 0 && selectedItem.includes(item.id)
                ? "green"
                : "white",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
