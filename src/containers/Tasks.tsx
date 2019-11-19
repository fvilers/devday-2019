import React, { useEffect, useReducer, FunctionComponent } from "react";
import { TaskModel } from "../models";
import firebase from "../firebase";

type State = {
  tasks: Array<TaskModel>;
};

type Action = {
  payload: TaskModel;
  type: string;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "added":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case "modified":
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id !== action.payload.id ? task : action.payload
        )
      };
    case "removed":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };
    default:
      return state;
  }
};

const INITIAL_STATE: State = {
  tasks: new Array<TaskModel>()
};

type Props = {
  component: FunctionComponent<{ tasks: Array<TaskModel> }>;
};

const Tasks: React.FC<Props> = ({ component }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(
    () =>
      firebase
        .firestore()
        .collection("tasks")
        .onSnapshot(snapshot => {
          for (const { doc, type } of snapshot.docChanges()) {
            const payload = { id: doc.id, ...doc.data() } as TaskModel;

            dispatch({ type, payload });
          }
        }),
    []
  );

  return React.createElement(component, { tasks: state.tasks });
};

export default Tasks;
