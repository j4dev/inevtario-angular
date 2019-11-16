import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private afAuth: AuthenticationService, private router: Router) { }
  public users = [];
  ngOnInit() {
    this.users = this.getViewUser();
  }

  logOut() {
    this.afAuth.signOut();
  }

  getViewUser() {
    if (localStorage.getItem('user') === null) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/inicio']);
      const user = JSON.parse(localStorage.getItem('user'));
      return user;
    }
  }
}
