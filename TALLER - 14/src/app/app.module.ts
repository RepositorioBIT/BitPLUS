import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './store/tasks.reducer';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({tasks: tasksReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
