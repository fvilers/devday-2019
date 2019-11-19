import React from "react";
import { TaskModel } from "../models";
import TaskListItem from "./TaskListItem";
import Task from "../containers/Task";

type Props = {
  tasks: Array<TaskModel>;
};

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task component={TaskListItem} key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
