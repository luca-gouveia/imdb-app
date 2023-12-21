import { Component, OnInit } from '@angular/core';
import { Titulo } from '../usuarios/shared/titulo.model';
import { TituloService } from '../usuarios/shared/titulo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista: Array<Titulo> = [];

  constructor(private tituloService: TituloService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.tituloService.recuperarTodos().subscribe(
      res => {
        this.lista = res;
      },
      err => {
        this.toast.error(err?.error?.message);
      }
    )
  }

  abrirTitulo(id?: Number) {
    if (id) {
      this.router.navigate([`titulo/${id}`]);
    }
  }

}
