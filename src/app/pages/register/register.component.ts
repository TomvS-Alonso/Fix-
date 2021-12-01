import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IUsuario } from "src/app/servicio/IUsuario";
import { UsuarioServicioService } from "src/app/servicio/usuario-servicio.service";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    public usuario: IUsuario = {
        nombre: "",
        apellidos: "",
        contrasena: "",
        correo: "",
        telefono: 0,
        fechaNacimiento: new Date(),
        direccion: ""
    }
    private servicioUsuario: UsuarioServicioService;
    constructor(servicio: UsuarioServicioService, private router: Router) {
        this.servicioUsuario = servicio;
    }

    agregarUsuario() {        
        this.servicioUsuario.agregarUsuarios(this.usuario)
        .subscribe(respuesta => respuesta);
        this.router.navigate(['']);
    }

    ngOnInit() {}
}