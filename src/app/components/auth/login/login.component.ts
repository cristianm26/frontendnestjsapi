import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { TokenService } from '../../../services/token.service';
import { loginUsuario } from '../../../models/loginUsuario';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: any = null;
  nombreUsuario!: string;
  password!: string;
  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.usuario = new loginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.usuario).subscribe(data => {
      if (!data.token) {
        this.toastr.error(data.response.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      } else {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/']);
      }

    },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      })
  }

}
