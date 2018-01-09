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
    }
    console.log('ffff')

    // this.authenticationService.login(this.model.email, this.model.password)
    //   .subscribe(
    //     result => {
    //       if (result.login_success) {
    //         this.router.navigateByUrl('/main');
    //       } else {
    //         this.errorMessage = "Invalid email or password. Please try again."
    //       }
    //     },
    //     error => {
    //       console.log(error)
    //     })
  }

  logout() {
    this.authenticationService.logout()
  }

}
