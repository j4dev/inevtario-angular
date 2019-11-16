import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/users/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InicioComponent } from './components/users/inicio/inicio.component';
import { PerfilComponent } from './components/users/perfil/perfil.component';
import { EditarPerfilComponent } from './components/users/editar-perfil/editar-perfil.component';
import { BodegasComponent } from './components/bodegas/bodegas.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'perfil', component: PerfilComponent },
  {path: 'edit-perfil', component: EditarPerfilComponent},
  {path: 'products', component: ProductosComponent},
  {path: 'bodegas', component: BodegasComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
