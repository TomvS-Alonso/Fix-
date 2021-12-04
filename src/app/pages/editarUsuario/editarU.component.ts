import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UsuarioServicioService } from "src/app/servicio/usuario-servicio.service";
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/servicio/IUsuario';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'editar-usuario',
    templateUrl: './editarU.component.html',
    styleUrls: ['./editarU.component.css']
})

export class EditarComponent implements OnInit {
    private url: string = 'http://54.174.99.157:3000/usuarios';


    formValue !: FormGroup;
    nuevoUsuario: IUsuario = {
        correo: '',
        nombre: '',
        apellidos: '',
        telefono: 0,
        direccion: '',
        fechaNacimiento: new Date(),
        contrasena: ''
    }

    // variables para llenar campos
    nombre: string;
    apellidos: string;
    direccion: string;
    correo: string;
    telefono: number;
    contrasena: string;
    fechaNacimiento: Date;
    id: number;
    
    constructor(private cliente: HttpClient, private servicio: UsuarioServicioService, private ruta: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit(): void{
        this.ruta.paramMap.subscribe((params) => {
            this.id = +params.get('id');
        });

        this.formValue = this.formBuilder.group({
            correo: [''],
            nombre: [''],
            apellidos: [''],
            telefono: [''],
            direccion: [''],
            fechaNacimiento: [''],
            contrasena: [''],
        })
        
        this.cliente.get<any>(this.url).subscribe((response) => {
            const usuario = response.find((encontrado: any) => {
                return encontrado.id === this.id;
            });
            if (usuario) {
                this.nombre = usuario.nombre;
                this.apellidos = usuario.apellidos;
                this.direccion = usuario.direccion;
                this.correo = usuario.correo;
                this.telefono = usuario.telefono;
                this.fechaNacimiento = usuario.fechaNacimiento;
                this.contrasena = usuario.contrasena;
            }
        });
    }

    editarUsuario() {
        this.nuevoUsuario.correo = this.formValue.value.correo;
        this.nuevoUsuario.nombre = this.formValue.value.nombre;
        this.nuevoUsuario.apellidos = this.formValue.value.apellidos;
        this.nuevoUsuario.telefono = this.formValue.value.telefono;
        this.nuevoUsuario.direccion = this.formValue.value.direccion;
        this.nuevoUsuario.fechaNacimiento = this.formValue.value.fechaNacimiento;
        this.nuevoUsuario.contrasena = this.formValue.value.contrasena;
        
        this.servicio.editarUsuario(this.id, this.nuevoUsuario).subscribe((rest) => {
            window.location.reload();
        });
        this.router.navigate(['/usuario/1']); 
        
    }
}