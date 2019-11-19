import React from "react";
import { TaskModel } from "../models";

type Props = {
  onChange: (checked: boolean) => void;
} & TaskModel;

const TaskListItem: React.FC<Props> = ({ onChange, done, id, label }) => {
  return (
    <li>
      <input
        checked={done}
        id={id}
        onChange={e => onChange(e.target.checked)}
        type="checkbox"
      />
      <label htmlFor={id}>{label}</label>
    </li>
  );
};

export default TaskListItem;
