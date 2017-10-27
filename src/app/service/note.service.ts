import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class NoteService {
  constructor(private http: Http) { }

  getAllNotebooks() {

    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/notebooks'

    return this.http.get(url, options)
      .map((response:Response) => response.json());
  }

  updateNotebook(notebookId: string, text: string) {
    let body = JSON.stringify({ 'text': text })
    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/notebook/' + notebookId

    return this.http.put(url, body, options )
      .map((response: Response) => {
        let result = response.json()
        return result
      })
  }

}
