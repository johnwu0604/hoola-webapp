import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'finances-cmp',
  templateUrl: 'finances.component.html',
  styleUrls: ['finances.component.css']
})
export class FinancesComponent implements OnInit {

  public model: any = []
  public filter: any = {
    'month': '1',
    'year': '1'
  }
  public types: any = [
    {
      'id': '1',
      'name': 'Expense'
    },
    {
      'id': '2',
      'name': 'Revenue'
    }
  ]
  public categories: any = [
    {
      'id': '1',
      'name': 'Food'
    },
    {
      'id': '2',
      'name': 'Utilities'
    }
  ]
  public months: any = [
    {
      'id': '1',
      'name': 'January'
    },
    {
      'id': '2',
      'name': 'February'
    },
    {
      'id': '3',
      'name': 'March'
    },
    {
      'id': '4',
      'name': 'April'
    }
  ]
  public years: any = [
    {
      'id': '1',
      'name': '2016'
    },
    {
      'id': '2',
      'name': '2017'
    },
    {
      'id': '3',
      'name': '2018'
    }
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.filter.month)
  }

  public addNewItem() {
    console.log(this.model)
  }

  public filterItems() {
    console.log(this.filter)
  }
}
