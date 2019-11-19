import React from "react";
import Tasks from "./containers/Tasks";
import TaskList from "./components/TaskList";
import NewTask from "./containers/NewTask";

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="mb-4">
        <h1>Tasks</h1>
      </header>

      <main className="mb-4">
        <Tasks component={TaskList} />
      </main>

      <footer>
        <NewTask />
      </footer>
    </div>
  );
};

export default App;
