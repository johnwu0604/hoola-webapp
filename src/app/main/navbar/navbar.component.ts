import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ROUTES} from "./navbar-routes.config";

@Component({
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menuItems: any = []

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem)
  }

  public isActive(url: any): boolean {
    return this.router.url.includes(url)
  }

}
