import "./App.css";
import DashBoard from "./components/Dashboard";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="h-dvh w-full bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex justify-center pt-64">
        <DashBoard />
        <Todo />
      </div>
    </div>
  );
}

export default App;
