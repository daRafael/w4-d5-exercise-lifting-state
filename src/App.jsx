import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import studentsData from "./studentsData";
import "./App.css";
import Navbar from "./components/Navbar";

// Pages
import Homepage from "./Homepage";
import Listing from "./Listing";
import SingleStudent from "./SingleStudent";
import Error from "./Error";

function App() {
  const [items, setItems] = useState(studentsData)

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage students={items}/>} />
        <Route path="/students" element={<Listing students={items} deleteItem={deleteItem} />} />
        <Route
          path="/students/:studentId"
          element={<SingleStudent students={items} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
