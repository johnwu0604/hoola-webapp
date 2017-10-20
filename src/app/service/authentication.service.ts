import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(email: string, password: string) {
    return this.http.post('localhost:5000/login', JSON.stringify({ email: email, password: password }))
      .map((response: Response) => {
        let user = response.json();
        return user;
      });
  }

}
