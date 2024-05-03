import Counter from "./components/Counter";
import "./Homepage.css";

export default function Homepage({students}) {
  return (
    <div className="home-wrapper">
      <h1>Hi Ironhackers</h1>
      <h3>This is our amazing students list app with routing</h3>
      <Counter students={students} />
    </div>
  );
}
