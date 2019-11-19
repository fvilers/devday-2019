import React from "react";
import TaskList from "../components/TaskList";
import { TaskModel } from "../models";

const Tasks: React.FC = () => {
  const tasks: Array<TaskModel> = [
    {
      done: false,
      id: "1",
      label: "This is a task"
    }
  ];

  return <TaskList tasks={tasks} />;
};

export default Tasks;
