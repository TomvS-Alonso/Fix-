import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UsuarioServicioService } from "src/app/servicio/usuario-servicio.service";
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/servicio/IUsuario';

@Component({
    selector: 'editar-usuario',
    templateUrl: './editarU.component.html',
    styleUrls: ['./editarU.component.css']
})

export class EditarComponent implements OnInit {
    private url: string = 'http://localhost:3000/usuarios';

    // variables para llenar campos
    nombre: string;
    apellidos: string;
    direccion: string;
    correo: string;
    telefono: number;
    contrasena: string;
    fechaNacimiento: Date;
    id: number;

    // variables editadas
    nombreED: string;
    apellidosED: string;
    direccionED: string;
    correoED: string;
    telefonoED: string;
    contrasenaED: string;
    fechaNacimientoED: Date;

    constructor(private cliente: HttpClient, private servicio: UsuarioServicioService, private ruta: ActivatedRoute) { }

    ngOnInit() {
        this.ruta.paramMap.subscribe((params) => {
            this.id = +params.get('id');
        });

        this.cliente.get<any>(this.url).subscribe((response) => {
            const usuario = response.find((encontrado: any) => {
                return encontrado.id === this.id;
            });
            if (usuario) {
                this.nombreED = usuario.nombre;
                this.apellidosED = usuario.apellidos;
                this.direccionED = usuario.direccion;
                this.correoED = usuario.correo;
                this.telefonoED = usuario.telefono;
                this.fechaNacimientoED = usuario.fechaNacimiento;
                this.contrasenaED = usuario.contrasena;
            }
        });
        console.log(this.nombre);
        




    }

    editarUsuario() {

        

        var nuevoUser: IUsuario = {
            nombre: this.nombre,
            contrasena: this.contrasena,
            apellidos: this.apellidos,
            telefono: this.telefono,
            fechaNacimiento: this.fechaNacimiento,
            correo: this.correo,
            direccion: this.direccion,
        };
        this.servicio.editarUsuario(this.id, nuevoUser).subscribe((respuesta) => {
            window.location.reload()
        });
    }

}