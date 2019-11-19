import React from "react";
import { TaskModel } from "../models";
import TaskListItem from "./TaskListItem";

type Props = {
  tasks: Array<TaskModel>;
};

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskListItem key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
