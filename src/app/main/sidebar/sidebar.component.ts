import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import {Router} from "@angular/router";

@Component({
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
