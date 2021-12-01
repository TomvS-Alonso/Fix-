import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IMaestro } from "src/app/servicio/IMaestro";
import { MaestroServicioService } from "src/app/servicio/maestro-servicio.service";

@Component({
    selector: 'registerMaestro',
    templateUrl: './registerM.component.html',
    styleUrls: ['./registerM.component.css']
})

export class RegistroMaestroComponent {
    public maestro: IMaestro = {
        nombre: "",
        apellidos: "",
        contrasena: "",
        correo: "",
        telefono: 0,
        profesion: "",
        direccion: ""
    }
    private servicioMaestro: MaestroServicioService;
    constructor(servicio: MaestroServicioService, private router: Router) {
        this.servicioMaestro = servicio;
    }

    agregarMaestro() {
        // this.maestro.id = this.maestro.id + 1;
        this.servicioMaestro.agregarMaestros(this.maestro)
        .subscribe(respuesta => respuesta)
        this.router.navigate(['loginMaestro'])

    }

    ngOnInit() {}
}