import React, { FunctionComponent, useMemo } from "react";
import { TaskModel } from "../models";
import firebase from "../firebase";

type ComponentProps = {
  onChange: (checked: boolean) => void;
  onDelete: () => void;
} & TaskModel;

type Props = {
  component: FunctionComponent<ComponentProps>;
} & TaskModel;

const Task: React.FC<Props> = ({ component, id, ...rest }) => {
  const docRef = useMemo(
    () =>
      firebase
        .firestore()
        .collection("tasks")
        .doc(id),
    [id]
  );
  const onChange = (done: boolean) => {
    docRef.update({ done });
  };
  const onDelete = () => {
    docRef.delete();
  };

  return React.createElement(component, { id, onChange, onDelete, ...rest });
};

export default Task;
