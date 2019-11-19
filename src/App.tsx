import React from "react";
import Tasks from "./containers/Tasks";
import TaskList from "./components/TaskList";
import NewTask from "./containers/NewTask";

const App: React.FC = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <Tasks component={TaskList} />
      <NewTask />
    </div>
  );
};

export default App;
