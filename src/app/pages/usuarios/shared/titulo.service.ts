import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Titulo } from './titulo.model';


@Injectable({
    providedIn: 'root'
})
export class TituloService {

    constructor(private httpClient: HttpClient) {}

    recuperarTodos(): Observable<Titulo[]> {
        const URL = `${environment.urlBase}/catalogo`

        return this.httpClient.get(URL).pipe(
            map(this.converterParaTitulos)
        )

    }

    recuperarPorId(id: number): Observable<Titulo> {
        const URL = `${environment.urlBase}/catalogo/${id}`

        return this.httpClient.get(URL).pipe(
            map(this.converteParaTitulo)
        )
    }

    editar(client: Titulo): Observable<Titulo> {
        const URL = `${environment.urlBase}/catalogo/${client.id}`

        return this.httpClient.put(URL, client).pipe(
            map(this.converteParaTitulo)
        )
    }

    avaliar(idItemCatalogo: number, nota: number): Observable<any> {
        const URL = `${environment.urlBase}/catalogo/avaliar`;

        let body = {
            idItemCatalogo: idItemCatalogo,
            nota: nota
        }

        return this.httpClient.post(URL, body, { responseType: 'json' }).pipe(
            map((response) => {response}),
            catchError((err: any) => {
                throw 'Falha ao avaliar.'
            })
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