import {Component, OnInit, ElementRef} from '@angular/core';
import {Router} from "@angular/router";
import {ROUTES} from "./navbar-routes.config";

@Component({
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menuItems: any = []
  private toggleButton: any
  private sidebarVisible: boolean

  constructor( private router: Router, private element: ElementRef) {
    this.sidebarVisible = false
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem)
    const navbar: HTMLElement = this.element.nativeElement
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0]
  }

  public isActive(url: any): boolean {
    return this.router.url.includes(url)
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function(){
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
  }

  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  }

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

}
