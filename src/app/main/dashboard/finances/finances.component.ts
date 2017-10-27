import { Component, OnInit } from '@angular/core';
import { FinanceService } from "../../../service/finance.service";
import {Router} from "@angular/router";

@Component({
  selector: 'finances-cmp',
  templateUrl: 'finances.component.html',
  styleUrls: ['finances.component.css'],
  providers: [ FinanceService ]
})
export class FinancesComponent implements OnInit {

  public model: any = []
  public filter: any = {
    'month': '',
    'year': ''
  }
  public types: any = []
  public categories: any = []
  public items: any = []
  public months: any = [
    {
      'id': '0',
      'name': 'January'
    },
    {
      'id': '1',
      'name': 'February'
    },
    {
      'id': '2',
      'name': 'March'
    },
    {
      'id': '3',
      'name': 'April'
    },
    {
      'id': '4',
      'name': 'May'
    },
    {
      'id': '5',
      'name': 'June'
    },
    {
      'id': '6',
      'name': 'July'
    },
    {
      'id': '7',
      'name': 'August'
    },
    {
      'id': '8',
      'name': 'September'
    },
    {
      'id': '9',
      'name': 'October'
    },
    {
      'id': '10',
      'name': 'November'
    },
    {
      'id': '11',
      'name': 'December'
    },
    {
      'id': '12',
      'name': 'All'
    }
  ]
  public years: any = [
    {
      'id': '2016',
      'name': '2016'
    },
    {
      'id': '2017',
      'name': '2017'
    },
    {
      'id': '2018',
      'name': '2018'
    }
  ]

  constructor(
    public router: Router,
    public financeService: FinanceService
  ) { }

  ngOnInit() {
    this.filter.month = new Date().getMonth()
    this.filter.year = new Date().getFullYear()
    this.getAllFinances()
  }

  public getAllFinances() {
    this.financeService.getAllFinances()
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.types = result.finances.types
            this.categories = result.finances.categories
            this.items = result.finances.items
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

  public addNewItem() {
    this.financeService.addItem(this.model.type_id, this.model.category_id, this.model.date, this.model.description, this.model.amount)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.items = result.finances
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
    this.model = []
  }

  public deleteItem(itemId) {
    this.financeService.deleteItem(itemId)
      .subscribe(
        result => {
          if ( result.user_authenticated ) {
            this.items = result.finances
          } else {
            this.router.navigateByUrl('/login');
          }
        },
        error => {
          console.log(error)
        })
  }

}
