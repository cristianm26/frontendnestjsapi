import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { nuevoUsuario } from '../../../models/nuevoUsuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: any = null;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.usuario = new nuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.registro(this.usuario).subscribe(data => {
      this.toastr.success(data.message, 'Ok', {
        timeOut: 3000, positionClass: 'toast-top-center',
      });
      this.router.navigate(['/login'])
    },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      });
  }

}
