import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Task } from './../tasks.model';
import { AppState } from './../../app.state';

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
      console.log(tasks)
      this.tasks = tasks;
    });
  }
}