import { counterReducer } from "../reducers/counter.reducer";
import { employeesReducer } from "../reducers/employee.reducer";
import { todoReducer } from "../reducers/todo.reducers";

export const myStore = {
  counterReducer,
  todoReducer,
  employeesReducer
}
