import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AuthenticationService) { }

  ngOnInit() {
  }

  // Login with Google
  async loginGoogle() {
    try {
      const res = await this.afAuth.googleAuth();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async loginEmail() {
    // tslint:disable-next-line:prefer-const
    let email = document.querySelector<HTMLInputElement>('#InputEmail').value;
    // tslint:disable-next-line:prefer-const
    let pass = document.querySelector<HTMLInputElement>('#InputPassword').value;
    try {
      const res = await this.afAuth.signIn(email, pass);
    } catch (error) {
      console.log(error);
    }
  }
}
