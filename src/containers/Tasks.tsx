import React, { useEffect, useReducer, FunctionComponent } from "react";
import { TaskModel } from "../models";
import firebase from "../firebase";
import Loading from "../components/Loading";

type State = {
  ready: boolean;
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
        ready: true,
        tasks: [...state.tasks, action.payload]
      };
    case "modified":
      return {
        ...state,
        ready: true,
        tasks: state.tasks.map(task =>
          task.id !== action.payload.id ? task : action.payload
        )
      };
    case "removed":
      return {
        ...state,
        ready: true,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };
    default:
      return state;
  }
};

const INITIAL_STATE: State = {
  ready: false,
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

  if (!state.ready) {
    return <Loading />;
  }

  return React.createElement(component, { tasks: state.tasks });
};

export default Tasks;
