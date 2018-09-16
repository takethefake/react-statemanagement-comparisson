import * as React from "react";
import { render } from "react-dom";

import { ITodo, Todo } from "../types";
import { TodoList } from "../components/TodoList";
import { CreateTodoInput } from "../components/CreateTodoInput";

import * as helper from "../helper";

export class StateTodoList extends React.Component {
  /* TODO: find out why it may be useful to insert 
  * your state Functions inside the state
  * (e.g.: https://reactjs.org/docs/context.html#updating-context-from-a-nested-component)
  */

  constructor(props) {
    super(props);

    const defaultState = { todos: [] };
    this.state = props.initialState ? props.initialState : defaultState;
  }

  removeTodoItem = (todoId: number) => {
    this.setState(state => {
      state.todos = helper.remove(state.todos, todoId);
      return state;
    });
  };

  createTodoItem = (todoTitle: string) => {
    this.setState(state => {
      state.todos = helper.create(state.todos, new Todo(todoTitle));
      return state;
    });
  };

  updateTodoItem = (todoId: number, todo: ITodo) => {
    this.setState(state => {
      state.todos = helper.update(state.todos, todoId, todo);
      return state;
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <React.Fragment>
        <h1>SetState Todo</h1>
        <CreateTodoInput createTodoItem={this.createTodoItem} />
        <TodoList
          todos={todos}
          removeTodoItem={this.removeTodoItem}
          updateTodoItem={this.updateTodoItem}
        />
      </React.Fragment>
    );
  }
}
