import { createReducer, on } from "@ngrx/store"
import { addTask } from "./tasks.actions"

export const initState = [
  {
    name: "First task",
    state: "Pending"
  }
]

export const tasksReducer = createReducer(
  initState,
  on(addTask, (state, { task }) => [...state, task])
);