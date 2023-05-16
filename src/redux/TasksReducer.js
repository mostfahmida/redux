import { ADD, COMPLET, DELETE, FILTER, UPDATE } from "./type";
import { v4 as uuidv4 } from "uuid";

var Task = [
  {
    id: uuidv4(),
    title: "Make the Money",
    done: false,
  },
];

export const TasksReducer = (state = Task, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { id: uuidv4(), title: action.payload }];

    case UPDATE:
      const UpdatedTodo = state.map((e) => {
        if (e.id === action.payload.id) {
          return { ...e, title: action.payload.updatedtask };
        } else return e;
      });
      return UpdatedTodo;

    case DELETE:
      return state.filter((e) => e.id !== action.payload);

    case COMPLET:
      const CheckedTodo = state.map((e) => {
        if (e.id === action.payload) {
          return { ...e, done: !e.done };
        } else {
          return e;
        }
      });
      return CheckedTodo;

   /* case FILTER:
      if (action.payload === "done") {
        return state.filter((e) => e.done === true);
      } else if (action.payload === "notDone") {
        return state.filter((e) => e.done === false);
      } else {
        return state;
      }*/

      case FILTER:
        if (action.payload === "done") {
          return state.filter((task) => task.done);
        } else if (action.payload === "notDone") {
          return state.filter((task) => !task.done);
        } else {
          return state;
        }

    default:
      return state;
  }
};

export default TasksReducer;
