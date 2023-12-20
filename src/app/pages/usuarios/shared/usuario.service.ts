import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Usuario } from '../shared/usario.model'


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) {}

    recuperarTodos(): Observable<Usuario[]> {
        const URL = `${environment.urlBase}/usuarios`

        return this.http.get(URL).pipe(
            map(this.converterParaUsuarios)
        )

    }

    recuperarPorId(id: number): Observable<Usuario> {
        const URL = `${environment.urlBase}/usuarios/${id}`

        return this.http.get(URL).pipe(
            map(this.converteParaUsuario)
        )

    }

    editar(client: Usuario): Observable<Usuario> {
        const URL = `${environment.urlBase}/usuarios/${client.id}`

        return this.http.put(URL, client).pipe(
            map(this.converteParaUsuario)
        )
    }


    desativar(clientId: number): Observable<any> {
        const URL = `${environment.urlBase}/usuarios/${clientId}`
        return this.http.delete(URL, { responseType: 'json' })
    }

    private converterParaUsuarios(data: any): Array<Usuario> {
        const listaUsuarios: Usuario[] = [];

        data.forEach((e: any) => listaUsuarios.push(Object.assign(new Usuario, e)))

        return listaUsuarios;
    }


    private converteParaUsuario(data: any): Usuario {
        return (Object.assign(new Usuario, data))
    }

}