import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IMaestro } from "src/app/servicio/IMaestro";
import { MaestroServicioService } from "src/app/servicio/maestro-servicio.service";

@Component({
    selector: 'perfilT',
    templateUrl: './perfilT.component.html',
    styleUrls: ['./perfilT.component.css']
})

export class PerfilTComponent implements OnInit{
    private url: string = 'http://54.174.99.157:3000/maestros';
    
    nombre: string;
    apellidos: string;
    direccion: string;
    id: number = 1; // en este caso solo llama a la id 1 
    // maestros: Observable<Array<IMaestro>>;    

    constructor(private servicio: MaestroServicioService, private cliente: HttpClient, private router: Router) {}

    ngOnInit() {
        // this.maestros = this.servicio.obtenerMaestros();
        // this.cliente.get<any>(this.url).subscribe((response) => {
        //     this.maestros = response
        // })
        // metodo para llamar a los datos de una sola id
        this.cliente.get<any>(this.url).subscribe((response) => {
            const maestro = response.find((encontrado:any) => {
                return encontrado.id === this.id;
            });
            // Si encontro maestro procede a lo siguiente
            if(maestro){
                this.nombre = maestro.nombre;
                this.apellidos = maestro.apellidos;
                this.direccion = maestro.direccion;
            }
        });
    }

    eliminarUsuario() {
        this.servicio.eliminarMaestro(this.id).subscribe(respuesta => respuesta);
        this.router.navigate(['loginMaestro']);
    }
}