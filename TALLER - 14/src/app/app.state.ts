import { Task } from './tasks/tasks.model';

export interface AppState {
  readonly tasks: Task[];
  readonly savedTasks: Task[];
}