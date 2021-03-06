import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class FinanceService {
  constructor(private http: Http) { }

  getAllFinances() {

    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/finances'

    return this.http.get(url, options)
      .map((response:Response) => response.json());
  }

  addItem(typeId: string, categoryId: string, date: string, description: string, amount: string) {
    let body = JSON.stringify({
      'type_id': typeId,
      'category_id': categoryId,
      'date': date,
      'description': description,
      'amount': amount
    })
    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/finance'

    return this.http.post(url, body, options )
      .map((response: Response) => {
        let result = response.json()
        return result
      })
  }

  deleteItem(itemId) {

    let headers = new Headers({ 'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers, withCredentials: true })
    let url = 'http://hoolaserverdev-env.iaryuqqehh.us-west-2.elasticbeanstalk.com/finance/' + itemId

    return this.http.delete(url, options)
      .map((response:Response) => response.json());
  }


}
