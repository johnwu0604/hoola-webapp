import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class NoteService {
  constructor(private http: Http) { }

  getAllNotes() {

    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/notes'

    return this.http.get(url, options)
      .map((response:Response) => response.json());
  }

  updateNotes(noteId: string, text: string) {
    let body = JSON.stringify({ 'text': text })
    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/notes/' + noteId

    return this.http.put(url, body, options )
      .map((response: Response) => {
        let result = response.json()
        return result
      })
  }

}
