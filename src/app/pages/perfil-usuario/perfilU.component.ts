import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UsuarioServicioService } from "src/app/servicio/usuario-servicio.service";

@Component({
    selector: 'perfil-usuario',
    templateUrl: './perfilU.component.html',
    styleUrls: ['./perfilU.component.css']
})

export class PerfilUsuarioComponent implements OnInit{
    private url: string = 'http://localhost:3000/usuarios'; 
    
    nombre: string;
    apellidos: string;
    direccion: string;
    id: number = 1;

    constructor(private cliente: HttpClient, private servicio: UsuarioServicioService) {}

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
        this.servicio.eliminarUsuario(this.id).subscribe(respuesta => console.log(respuesta))
    }
}
