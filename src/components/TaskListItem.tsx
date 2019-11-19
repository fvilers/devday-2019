import React from "react";
import { TaskModel } from "../models";

type Props = {
  onChange: (checked: boolean) => void;
} & TaskModel;

const TaskListItem: React.FC<Props> = ({ onChange, done, id, label }) => {
  return (
    <li className="list-group-item">
      <div className="custom-control custom-checkbox">
        <input
          checked={done}
          className="custom-control-input"
          id={id}
          onChange={e => onChange(e.target.checked)}
          type="checkbox"
        />
        <label className="custom-control-label" htmlFor={id}>
          {done ? <del>{label}</del> : label}
        </label>
      </div>
    </li>
  );
};

export default TaskListItem;
