import { Component } from "@angular/core";
import { ITrabajo } from "src/app/servicio/ITrabajo";
import { TrabajoServicioService } from "src/app/servicio/trabajo-servicio.service";
import { Router } from '@angular/router';

@Component({
    selector: 'agregar',
    templateUrl: './agregar.component.html',
    styleUrls: ['./agregar.component.css']
})

export class AgregarComponent{
    public trabajo: ITrabajo = {
        titulo: "",
        descripcion: "",
        fechaCreacion: new Date(),
        estado: "EN PROGRESO",
    }
    private serviciotrabajo: TrabajoServicioService;
    constructor(servicio: TrabajoServicioService, private router: Router) {
        this.serviciotrabajo = servicio;
    }

    agregarTrabajo() {
        this.serviciotrabajo.agregarTrabajos(this.trabajo)
        .subscribe(respuesta => respuesta)
        this.router.navigate(['/trabajos']);
    }
}