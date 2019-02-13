import { Task } from './../../models/task';
import { TodoActions, ETodoActions } from './../actions/todo.actions';

export const todoReducers = (state: Task[] = [], action: TodoActions): Task[] => {
  switch (action.type) {
    case ETodoActions.AddTask: {
      return [
        ...state,
        {
          id: state.reduce((maxId, task) => Math.max(maxId, task.id), -1) + 1,
          text: action.text,
          completed: false
        }
      ];
    }

    case ETodoActions.EditTask: {
      return state.map(task => (task.id === action.id ? { ...task, text: action.text } : task));
    }

    case ETodoActions.DeleteTask: {
      return state.filter(task => task.id !== action.id);
    }

    case ETodoActions.CompleteTask: {
      return state.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    }

    case ETodoActions.CompleteAllTasks: {
      const areAllMarked = state.every(task => task.completed);
      return state.map(task => ({ ...task, completed: !areAllMarked }));
    }

    case ETodoActions.ClearCompleted: {
      return state.filter(task => task.completed === false);
    }

    default:
      return state;
  }
};
