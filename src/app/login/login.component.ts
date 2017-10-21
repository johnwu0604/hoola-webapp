import { Component, OnInit } from '@angular/core';
import { User }    from '../model/user';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-cmp',
  templateUrl: './login.component.html',
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  model: any = {}
  submitted = false

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        result => {
          console.log(result.user)
          this.router.navigateByUrl('/main');
        },
        error => {
          console.log(error)
        });
  }

  // newUser() {
  //   this.model = new User('john', '')
  // }
}
