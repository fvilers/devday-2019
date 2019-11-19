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
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="label">New task</label>
        <input
          id="label"
          onChange={e => setLabel(e.target.value)}
          required
          type="text"
          value={label}
        />
      </div>

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default NewTaskForm;
