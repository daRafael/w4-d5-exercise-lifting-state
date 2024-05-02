import { Routes, Route } from "react-router-dom";
import studentsData from "./studentsData";
import "./App.css";
import Navbar from "./components/Navbar";

// Pages
import Homepage from "./Homepage";
import Listing from "./Listing";
import SingleStudent from "./SingleStudent";
import Error from "./Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/students" element={<Listing students={studentsData} />} />
        <Route
          path="/students/:studentId"
          element={<SingleStudent students={studentsData} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
