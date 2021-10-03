import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './components/producto/detalle-producto/detalle-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: ListaProductoComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
  { path: 'nuevo', component: CrearProductoComponent },
  { path: 'editar/:id', component: EditarProductoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
