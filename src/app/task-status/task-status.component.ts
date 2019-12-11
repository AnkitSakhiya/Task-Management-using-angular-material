import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
export class TaskStatusComponent implements OnInit {
  ///@ViewChild('closebutton') closebutton;
  TaskName = new FormControl('');
  new : string[];
  todo : string[];
  qa : string[];
  done : string[];
  constructor(private taskservice:TaskService) {
    this.new = this.taskservice.new;
    this.todo = this.taskservice.todo;
    this.qa = this.taskservice.qa;
    this.done = this.taskservice.done;
   }

  ngOnInit() {
  }

  newTask(){
    this.TaskName.reset();
  }

  CreateNewtask(){
    this.new.push(this.TaskName.value);
    this.TaskName.reset();
    $("#Newtaskmodel").modal('hide');
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}