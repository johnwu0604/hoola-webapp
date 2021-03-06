import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ShoppingService {
  constructor(private http: Http) { }

  getAllShoppingItems() {

    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/shopping-list-items'

    return this.http.get(url, options)
      .map((response:Response) => response.json());
  }

  addShoppingItem(description: string) {
    let body = JSON.stringify({ 'description': description })
    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/shopping-list-item'

    return this.http.post(url, body, options )
      .map((response: Response) => {
        let result = response.json()
        return result
      })
  }

  deleteShoppingItem(itemId) {

    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/shopping-list-item/' + itemId

    return this.http.delete(url, options)
      .map((response:Response) => response.json());
  }


}
