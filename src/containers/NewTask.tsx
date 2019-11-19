import React from "react";
import firebase from "../firebase";
import NewTaskForm from "../components/NewTaskForm";

const NewTask: React.FC = () => {
  const handleSubmit = (label: string) =>
    firebase
      .firestore()
      .collection("tasks")
      .add({
        done: false,
        label
      });

  return <NewTaskForm onSubmit={handleSubmit} />;
};

export default NewTask;
