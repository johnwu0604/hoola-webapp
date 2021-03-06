import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-cmp',
  templateUrl: './login.component.html',
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  public model: any = {}
  public errorMessage: string = ""

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.logout()
  }

  onSubmit() {
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        result => {
          if (result.login_success) {
            this.router.navigateByUrl('/main')
          } else {
            this.errorMessage = "Invalid email or password. Please try again."
          }
        },
        error => {
          console.log(error)
        })
  }

  onSignUpClick() {
    this.router.navigateByUrl('/signup')
  }

  logout() {
    this.authenticationService.logout()
  }

}
