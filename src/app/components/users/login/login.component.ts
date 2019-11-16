import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/authentication.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userState: any;
  constructor(private afAuth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.getUser();
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
  getUser() {
    this.afAuth.isAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/inicio']);
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
