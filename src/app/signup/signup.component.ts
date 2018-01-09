import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-cmp',
  templateUrl: './signup.component.html',
  providers: [AuthenticationService]
})
export class SignupComponent implements OnInit {

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
    if (this.model.password != this.model.password_confirm) {
      this.errorMessage = "Passwords do not match, please try again"
      this.model.password = ""
      this.model.password_confirm = ""
      return
    } else {
      this.authenticationService.signup(this.model.first_name, this.model.last_name, this.model.email, this.model.password)
        .subscribe(
          result => {
            if (result.signup_success) {
              this.router.navigateByUrl('/main');
            } else {
              this.errorMessage = "This account already exists. Please try again."
              this.model = ""
            }
          },
          error => {
            console.log(error)
          })
    }
  }

  logout() {
    this.authenticationService.logout()
  }

}
