import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IMaestro } from "src/app/servicio/IMaestro";
import { MaestroServicioService } from "src/app/servicio/maestro-servicio.service";

@Component({
    selector: 'categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit{
    private url: string = 'http://54.174.99.157:3000/maestros';
    private httpClient: HttpClient;

    // nombre: string;
    // apellido: string;
    maestros: Observable<Array<IMaestro>>;    

    constructor(private servicio: MaestroServicioService, private cliente: HttpClient) {}

    ngOnInit() {
        // this.maestros = this.servicio.obtenerMaestros();
        this.cliente.get<any>(this.url).subscribe((response) => {            
            this.maestros = response;
            
        })
    }
}