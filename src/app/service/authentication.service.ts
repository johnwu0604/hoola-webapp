import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(email: string, password: string) {

    let body = JSON.stringify({ 'email': email, 'password': password})
    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/login'

    return this.http.post(url, body, options )
      .map((response: Response) => {
        let result = response.json()
        return result
      })

  }

  logout() {

    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/logout'

    return this.http.get(url, options)
      .map((response:Response) => response.json());
  }


}
