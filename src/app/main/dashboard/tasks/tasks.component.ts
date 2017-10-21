import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../service/task.service";
import { Router } from "@angular/router";

@Component({
  selector: 'tasks-cmp',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {

  tasks: any = []

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllTasks()
  }

  getAllTasks() {
    this.taskService.getAllTasks()
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.tasks = result.tasks
            console.log(this.tasks)
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

}
