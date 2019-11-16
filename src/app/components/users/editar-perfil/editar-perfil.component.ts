import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  constructor(private router: Router) { }
  public users = [];
  ngOnInit() {
    this.users = this.getViewUser();
  }

  getViewUser() {
    if (localStorage.getItem('user') === null) {
      this.router.navigate(['']);
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      return user;
    }
  }
}
