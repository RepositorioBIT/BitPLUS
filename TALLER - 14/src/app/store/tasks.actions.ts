import { createAction, props } from '@ngrx/store';
import { Task } from '../tasks/tasks.model'

export const addTask = createAction("[Task Component] Add task", props<{ task: Task }>());

export const deleteTask = createAction("[Task Component] Delete task", props<{ id: number }>());

// Saved tasks actions

export const addSavedTask = createAction("[Saved Task Component] Add task", props<{ task: Task }>());
