import React, { useState, FormEvent } from "react";

type Props = {
  onSubmit: (label: string) => void;
};

const NewTaskForm: React.FC<Props> = ({ onSubmit }) => {
  const [label, setLabel] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(label);
    setLabel("");
  };

  return (
    <form autoComplete="off" className="form-inline" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="label">
        New task
      </label>

      <input
        className="form-control mb-2 mr-sm-2 flex-grow-1"
        id="label"
        onChange={e => setLabel(e.target.value)}
        placeholder="Type in a description for a new task"
        required
        type="text"
        value={label}
      />

      <button className="btn btn-primary mb-2" type="submit">
        Add task
      </button>
    </form>
  );
};

export default NewTaskForm;
