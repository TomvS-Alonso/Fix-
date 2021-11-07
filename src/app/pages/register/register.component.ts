import { Component } from "@angular/core";
import { IMaestro } from "src/app/servicio/IMaestro";
import { MaestrosServicioService } from "src/app/servicio/maestros-servicio.service";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent{
    public maestro: IMaestro = {
        id: 1,
        nombre: "",
        apellidos: "",
        contrasena: "",
        correo: "",
        telefono: 0,
        fechaNacimiento: new Date(),
    }
    private servicioMaestro: MaestrosServicioService;
    constructor(servicio: MaestrosServicioService) {
        this.servicioMaestro = servicio;
    }

    agregarMaestro() {
        this.servicioMaestro.agregarMaestros(this.maestro)
        .subscribe(respuesta => console.log(respuesta))
    }

    ngOnInit() {}
    
}