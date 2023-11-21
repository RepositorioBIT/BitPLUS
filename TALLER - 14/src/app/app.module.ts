import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { tasksReducer, savedTasksReducer } from './store/tasks.reducer';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ListTasksComponent } from './tasks/list-tasks/list-tasks.component';
import { SideListComponent } from './side-list/side-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTasksComponent,
    SideListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({tasks: tasksReducer, savedTasks: savedTasksReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
