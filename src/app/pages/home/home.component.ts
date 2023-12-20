import { Component, OnInit } from '@angular/core';
import { Titulo } from '../usuarios/shared/titulo.model';
import { TituloService } from '../usuarios/shared/titulo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista: Array<Titulo> = [];

  constructor(private tituloService: TituloService) { }

  ngOnInit(): void {
    this.tituloService.recuperarTodos().subscribe(
      res => { this.lista = res }
    )
  }

}
