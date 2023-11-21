import { Component } from '@angular/core';
import { Task } from '../tasks/tasks.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';


@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.css']
})
export class SideListComponent {
  tasks: Task[] = []; // Matriz local para almacenar las tareas

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.pipe(select('savedTasks')).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
