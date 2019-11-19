import React from "react";
import Tasks from "./containers/Tasks";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <Tasks component={TaskList} />
    </div>
  );
};

export default App;
