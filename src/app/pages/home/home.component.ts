import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IMaestro } from "src/app/servicio/IMaestro";
import { UsuarioServicioService } from "src/app/servicio/usuario-servicio.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    private url: string = 'http://54.174.99.157:3000/maestros'; 
    
    nombre: string;
    apellidos: string;
    id: number = 1;
    maestros: Observable<Array<IMaestro>>;

    constructor(private cliente: HttpClient, private servicio: UsuarioServicioService, private router: Router) {}

    ngOnInit() {
        this.cliente.get<any>(this.url).subscribe((response) => {
            const usuario = response.find((encontrado:any) =>{
                return encontrado.id === this.id; 
            });
            if(usuario) {
                this.nombre = usuario.nombre;
                this.apellidos = usuario.apellidos;
            }
        });
        this.cliente.get<any>(this.url).subscribe((response) => {            
            this.maestros = response;
            
        });
    }
}

