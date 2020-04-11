import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
 lists: List[]=[];
 tasks: Task[]=[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {

  }

}
