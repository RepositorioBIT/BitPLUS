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
  
  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  // Disparamos la acción
  addTask(name:string, state:string) {
    const task : Task = {name: name, state: state} 
    this.store.dispatch(TaskActions.addTask({task}))
  }
}