import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  new = [
    'New 1',
    'New 2'
  ];
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  qa = [
    'QA 1',
    'QA 2',
    'QA 3'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  constructor() { }

}