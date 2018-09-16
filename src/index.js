import React from "react";
import { render } from "react-dom";
import { providers } from "./mountHelper";
import { Todo } from "./types";

const renderWithProvider = ({ component, mounter }, initialState) =>
  mounter(initialState, component);

const initialState = {
  todos: [
    new Todo("Statemanagement with SetState", true),
    new Todo("Statemanagement with React.Context", true),
    new Todo("Statemanagement with Unstated"),
    new Todo("Statemanagement with MobX"),
    new Todo("Statemanagement with Redux"),
    new Todo("Statemanagement with Redux Thunk"),
    new Todo("Statemanagement with Apollo Link State")
  ]
};

render(
  renderWithProvider(providers.ReduxThunkTodoList, initialState),
  document.getElementById("root")
);
