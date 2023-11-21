// Importaciones
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import * as TaskActions from './../../store/tasks.actions';
import { Task } from '../tasks.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  currentId: number = 1;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  // Disparamos la acción
  addTask(name:string, state:string) {
    const task : Task = {
      name: name, 
      state: state,
      id: this.currentId++,
    } 
    this.store.dispatch(TaskActions.addTask({task}))
  }
}