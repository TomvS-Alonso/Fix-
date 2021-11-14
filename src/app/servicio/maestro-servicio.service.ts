import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMaestro } from './IMaestro'; 
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaestroServicioService {
  private url: string = 'http://localhost:3000/maestros';
  private httpClient: HttpClient;

  constructor(client: HttpClient) {
    this.httpClient = client
  }

  public obtenerMaestros(): Observable<Array<IMaestro>> {
    return this.httpClient.get<Array<IMaestro>>(this.url, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  public agregarMaestros(nuevoMaestro: IMaestro): Observable<IMaestro> {
    return this.httpClient.post<IMaestro>(this.url, JSON.stringify(nuevoMaestro), {
      headers: {
        "Content-Type":"application/json"
      }
    })
  }

  public eliminarMaestro(id: number)  {
    return this.httpClient.delete<any>(this.url + '/' + id).pipe(
      map((respuesta: any) =>{
        return respuesta;
      })
    )
  }

}