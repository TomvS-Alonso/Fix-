import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from './IUsuario';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {
  private url: string = 'http://54.174.99.157:3000/usuarios';
  private httpClient: HttpClient;

  constructor(client: HttpClient) {
    this.httpClient = client
  }

  public obtenerUsuarios(): Observable<Array<IUsuario>> {
    return this.httpClient.get<Array<IUsuario>>(this.url, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  public agregarUsuarios(nuevoUsuario: IUsuario): Observable<IUsuario> {
    return this.httpClient.post<IUsuario>(this.url, JSON.stringify(nuevoUsuario), {
      headers: {
        "Content-Type":"application/json"
      }
    })
  }
  public eliminarUsuario(id: number)  {
    return this.httpClient.delete<any>(this.url + '/' + id).pipe(
      map((respuesta: any) =>{
        return respuesta;
      })
    )
  }

  public editarUsuario(id: number, nuevoUser: IUsuario) {
    return this.httpClient.put<any>(this.url + '/' + id, nuevoUser).pipe(map((rest:any)=>{
      return rest;
    }));
  }

}
