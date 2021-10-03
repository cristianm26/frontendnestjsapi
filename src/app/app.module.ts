import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { DetalleProductoComponent } from './components/producto/detalle-producto/detalle-producto.component';
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { interceptorProvider } from './interceptors/producto.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    DetalleProductoComponent,
    ListaProductoComponent,
    EditarProductoComponent,
    CrearProductoComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
