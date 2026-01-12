import react, { useState } from "react";

function App() {
  const items = Array.from({ length: 23 }, (_, i) => `Item ${i+1}`)
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const TotalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentItems = items.slice(startIndex, endIndex);

  
  const handlePrev = () => {
    setCurrentPage(prev => prev - 1);
  }

  const handleNext = () => {
    setCurrentPage(prev => prev + 1);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <h1>Pagination</h1>

        <ul>
          {currentItems.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>

        <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
        Page {currentPage} of {TotalPages}
        <button onClick={handleNext} disabled={currentPage === TotalPages}>Next</button>
      </div>
    </>
  );
}

export default App;
