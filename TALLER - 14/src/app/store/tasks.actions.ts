import { createAction, props } from '@ngrx/store';
import { Task } from '../tasks/tasks.model'

// 2 - Definición del tipo de acción
export const ADD_TASK = 'Add task'

// 3 - Creamos y exportamos la acción
export const addTask = createAction("[Task Component] Add task", props<{ task: Task }>());
