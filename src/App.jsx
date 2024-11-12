import "./App.css";
import ReadNotes from "./component/ReadNotes";

function App() {
  return (
    <div className="text-center m-6">
      <h1 className="text-red-600 font-bold text-3xl">To-Do List</h1>
      <ReadNotes />
    </div>
  );
}

export default App;
