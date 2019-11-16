import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../../../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private authService: AuthenticationService, private afsAuth: AngularFireAuth, private router: Router) { }

  public isLogged = false;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        this.router.navigate(['/inicio']);
      } else {
        this.isLogged = false;
        this.router.navigate(['']);
      }
    });
  }
}
