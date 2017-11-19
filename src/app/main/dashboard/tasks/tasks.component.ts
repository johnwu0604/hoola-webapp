import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../../service/task.service";
import { Router } from "@angular/router";

@Component({
  selector: 'tasks-cmp',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {

  public tasks: any = []
  public model: any = {}

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllTasks()
  }

  public getAllTasks() {
    this.taskService.getAllTasks()
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.tasks = result.tasks
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

  public addNewTask() {
    var date = new Date(this.model.dueDate)
    this.taskService.addTask(this.model.description, date.toDateString())
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.tasks = result.tasks
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
    this.model = []
  }

  public deleteTask(taskId) {
    this.taskService.deleteTask(taskId)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.tasks = result.tasks
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

}
