import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioServicioService } from "src/app/servicio/usuario-servicio.service";

@Component({
    selector: 'perfil-usuario',
    templateUrl: './perfilU.component.html',
    styleUrls: ['./perfilU.component.css']
})

export class PerfilUsuarioComponent implements OnInit{
    private url: string = 'http://54.174.99.157:3000/usuarios'; 
    
    nombre: string;
    apellidos: string;
    direccion: string;
    id: number = 1;

    constructor(private cliente: HttpClient, private servicio: UsuarioServicioService, private router: Router) {}

    ngOnInit() {
        this.cliente.get<any>(this.url).subscribe((response) => {
            const usuario = response.find((encontrado:any) =>{
                return encontrado.id === this.id; 
            });
            if(usuario) {
                this.nombre = usuario.nombre;
                this.apellidos = usuario.apellidos;
                this.direccion = usuario.direccion;
            }
        });
    }
    eliminarUsuario() {
        this.servicio.eliminarUsuario(this.id).subscribe(respuesta => respuesta)
        this.router.navigate(['principal'])
    }
}
