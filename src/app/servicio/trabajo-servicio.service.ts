import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITrabajo } from './ITrabajo';

@Injectable({
    providedIn: 'root'
})
export class TrabajoServicioService {
    private url: string = 'http://localhost:3000/trabajos';
    private httpclient: HttpClient;
    private trabajos: Array<ITrabajo>; 

    constructor(client: HttpClient) {
        this.httpclient = client;
        this.trabajos = Array<ITrabajo>();
    }

    public obtenerTrabajos(): Observable<Array<ITrabajo>> {
        return this.httpclient.get<Array<ITrabajo>>(this.url, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    public agregarTrabajos(nuevoTrabajo: ITrabajo): Observable<ITrabajo> {
        return this.httpclient.post<ITrabajo>(this.url, JSON.stringify(nuevoTrabajo), {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    public eliminarTrabajo(id: number) {
        return this.httpclient.delete<any>(this.url + '/' + id).pipe(
            map((respuesta: any) => {
                return respuesta;
            })
        )
    }

    public editarTrabajo(id:number, nuevoTrabajo: ITrabajo) {
        return this.httpclient.put<any>(this.url + '/' + id, nuevoTrabajo).pipe(map((rest:any)=>{
            return rest;
        }));
    }
}