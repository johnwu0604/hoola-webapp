import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'calendar-cmp',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public model: any = {}

  constructor() { }

  ngOnInit() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    var date = new Date(this.model.date)
    this.model.dateFormatted = date.toDateString()

  }

}
