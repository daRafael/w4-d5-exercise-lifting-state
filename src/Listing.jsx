import StudentsList from "./components/StudentsList";

export default function Listing({ students }) {
  return (
    <div>
      <h1>Students List</h1>
      <StudentsList students={students} />
    </div>
  );
}
