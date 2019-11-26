import React from "react";
import { TaskModel } from "../models";

type Props = {
  onChange: (checked: boolean) => void;
  onDelete: () => void;
} & TaskModel;

const TaskListItem: React.FC<Props> = ({
  onChange,
  onDelete,
  done,
  id,
  label
}) => {
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

        <button
          className="close"
          onClick={onDelete}
          title="Delete this task"
          type="button"
        >
          <span>&times;</span>
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
