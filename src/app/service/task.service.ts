import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TaskService {
  constructor(private http: Http) { }

  getAllTasks() {

    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/tasks'

    return this.http.get(url, options)
      .map((response:Response) => response.json());
  }

  addTask(description: string, dueDate: string) {
    let body = JSON.stringify({ 'description': description, 'due_date': dueDate})
    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/task'

    return this.http.post(url, body, options )
      .map((response: Response) => {
        let result = response.json()
        return result
      })
  }

  deleteTask(taskId) {

    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/task/' + taskId

    return this.http.delete(url, options)
      .map((response:Response) => response.json());
  }


}
