import React from "react";
import { TaskModel } from "../models";

const TaskListItem: React.FC<TaskModel> = ({ done, id, label }) => {
  return (
    <li>
      <input defaultChecked={done} id={id} type="checkbox" />
      <label htmlFor={id}>{label}</label>
    </li>
  );
};

export default TaskListItem;
