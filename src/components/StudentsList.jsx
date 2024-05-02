import { useState } from "react";
import "./StudentsList.css";
import StudentCard from "./StudentCard";

export default function StudentsList({ students }) {
  const [items, setItems] = useState(students);
  // const [name, setName] = useState("");

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  // const addItem = () => {
  //   const id = items.length + 1;
  //   setItems([...items, { id, name }]);
  //   setName("");
  // };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      {/* <div>
        <div className="form-wrapper">
          <input type="text" value={name} onChange={handleChange} />
          <button onClick={addItem}>Add</button>
        </div>
      </div> */}
      <ul>
        {items.map((item) => (
          <StudentCard key={item.id} student={item} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}
