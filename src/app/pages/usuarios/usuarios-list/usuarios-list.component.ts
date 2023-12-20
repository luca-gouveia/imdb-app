import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario } from '../shared/usario.model';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  listaUsuarios: Array<Usuario> = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.recuperarTodos().subscribe(
      res => { this.listaUsuarios = res }
    )
  }

  remover(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
