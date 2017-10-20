import {Component, OnInit} from '@angular/core';
import { User }    from '../model/user';

@Component({
  selector: 'login-cmp',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  model: any = {}
  submitted = false

  ngOnInit() {

  }

  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new User('john', '')
  }
}
