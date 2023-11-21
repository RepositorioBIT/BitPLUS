import { createReducer, on } from "@ngrx/store"
import { addTask, deleteTask, addSavedTask } from "./tasks.actions"
import { Task } from "../tasks/tasks.model";

const initState = [
  {
    name: "First task",
    state: "Pending",
    id: 0
  }
]

const savedTasksLocalStorage = localStorage.getItem("savedTasks");
const savedTasksInitState: Task[] = savedTasksLocalStorage ? JSON.parse(savedTasksLocalStorage) : [];

export const tasksReducer = createReducer(
  initState,
  on(addTask, (state, { task }) => [...state, task]),
  on(deleteTask, (state, { id }) => {
    return state.filter(task => task.id !== id)
  })
);

export const savedTasksReducer = createReducer(
  savedTasksInitState,
  on(addSavedTask, (state, { task }) => {
    const updatedState = [...state, task]
    localStorage.setItem("savedTasks", JSON.stringify(updatedState))

    return updatedState;
  })
);