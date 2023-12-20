import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Titulo } from './titulo.model';


@Injectable({
    providedIn: 'root'
})
export class TituloService {

    constructor(private http: HttpClient) {}

    recuperarTodos(): Observable<Titulo[]> {
        const URL = `${environment.urlBase}/catalogo`

        return this.http.get(URL).pipe(
            map(this.converterParaTitulos)
        )

    }

    recuperarPorId(id: number): Observable<Titulo> {
        const URL = `${environment.urlBase}/catalogo/${id}`

        return this.http.get(URL).pipe(
            map(this.converteParaTitulo)
        )

    }

    editar(client: Titulo): Observable<Titulo> {
        const URL = `${environment.urlBase}/catalogo/${client.id}`

        return this.http.put(URL, client).pipe(
            map(this.converteParaTitulo)
        )
    }

    private converterParaTitulos(data: any): Array<Titulo> {
        const lista: Titulo[] = [];

        data.content.forEach((e: any) => lista.push(Object.assign(new Titulo, e)))

        return lista;
    }

    private converteParaTitulo(data: any): Titulo {
        return (Object.assign(new Titulo, data))
    }

}