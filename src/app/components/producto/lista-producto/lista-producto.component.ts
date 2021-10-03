import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../../../services/producto.service';
import Swal from 'sweetalert2'
import { TokenService } from '../../../services/token.service';
@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];
  listaVacia = undefined;
  isAdmin!: any;
  constructor(private productoService: ProductoService, private toastr: ToastrService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarProductos();
    this.isAdmin = this.tokenService.isAdmin()
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(res => {
      this.productos = res;
      this.listaVacia = undefined;
    },
      err => {
        this.listaVacia = err.error.message;
      })
  }

  borrar(id: any): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sip',
      cancelButtonText: 'Nops'
    }).then((result) => {
      if (result.value) {
        this.productoService.delete(id).subscribe(res => this.cargarProductos());
        Swal.fire(
          'OK',
          'Producto eliminado',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Producto a salvo',
          'error'
        );
      }
    });
  }
}
