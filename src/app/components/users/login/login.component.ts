import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  // Login with Google
  async loginGoogle() {
    try {
      const res = await this.afAuth.googleAuth();
      this.router.navigate(['/inicio']);
    } catch (error) {
      console.log(error);
    }
  }

  async loginFacebook() {
    try {
      const res = await this.afAuth.facebookAuth();
      this.router.navigate(['/inicio']);
    } catch (error) {
      console.log(error);
    }
  }

  logOut() {
    this.afAuth.signOut();
  }
}
