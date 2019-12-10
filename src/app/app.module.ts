import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { TaskService } from './task.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DragDropModule ],
  declarations: [ AppComponent, HelloComponent, TaskStatusComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TaskService]
})
export class AppModule { }
