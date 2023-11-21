import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Task } from './../tasks.model';
import { AppState } from './../../app.state';
import * as TaskActions from './../../store/tasks.actions';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  // Definimos el observable:
  tasks: Task[] = []; // Matriz local para almacenar las tareas
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.pipe(select('tasks')).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  removeTask(id:number) {
    this.store.dispatch(TaskActions.deleteTask({id}))
  }

  saveTask(id:number, name:string, state:string) {
    const task : Task = {
      name: name, 
      state: state,
      id: id,
    } 
    this.store.dispatch(TaskActions.addSavedTask({task}))
  }
}