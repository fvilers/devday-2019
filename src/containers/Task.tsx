import React, { FunctionComponent } from "react";
import { TaskModel } from "../models";
import firebase from "../firebase";

type ComponentProps = {
  onChange: (checked: boolean) => void;
} & TaskModel;

type Props = {
  component: FunctionComponent<ComponentProps>;
} & TaskModel;

const Task: React.FC<Props> = ({ component, id, ...rest }) => {
  const onChange = (done: boolean) =>
    firebase
      .firestore()
      .collection("tasks")
      .doc(id)
      .update({ done });

  return React.createElement(component, { id, onChange, ...rest });
};

export default Task;
