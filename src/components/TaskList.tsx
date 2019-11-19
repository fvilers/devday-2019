import React, { useMemo } from "react";
import { sortBy } from "../helpers";
import { TaskModel } from "../models";
import TaskListItem from "./TaskListItem";
import Task from "../containers/Task";

type Props = {
  tasks: Array<TaskModel>;
};

const TaskList: React.FC<Props> = ({ tasks }) => {
  const sorted = useMemo(() => sortBy(tasks, task => task.done), [tasks]);

  return (
    <ul>
      {sorted.map(task => (
        <Task component={TaskListItem} key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
