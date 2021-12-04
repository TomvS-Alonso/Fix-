import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ITrabajo } from 'src/app/servicio/ITrabajo';
import { TrabajoServicioService } from "src/app/servicio/trabajo-servicio.service";
import { Router } from '@angular/router';

@Component({
    selector: 'modificar',
    templateUrl: './modificar.component.html',
    styleUrls: ['./modificar.component.css']
})

export class ModificarComponent implements OnInit{
    private url: string = 'http://54.174.99.157:3000/trabajos';

    myGroup !: FormGroup;
    nuevoTrabajo: ITrabajo = {
        titulo: '',
        descripcion: '',
        estado: ''
    };

    titulo: string;
    descripcion: string;
    estado: string;
    id: number;

    constructor(
        private ruta: ActivatedRoute,
        private router: Router, 
        private formBuilder: FormBuilder, 
        private cliente: HttpClient,
        private servicio: TrabajoServicioService ) {}
    
    ngOnInit(): void{
        // se extrae la id desde la url 
        this.ruta.paramMap.subscribe((params) => {
            this.id = +params.get('id');
        });

        this.myGroup = this.formBuilder.group({
            titulo: [''],
            descripcion: [''],
            estado: [''],
        })

        // se encuentran los datos del trabajo para despues editar
        this.cliente.get<any>(this.url).subscribe((response) => {
            const trabajo = response.find((encontrado: any) => {
                //retorna el objeto con los datos
                return encontrado.id === this.id;
            });
            if(trabajo) {
                this.titulo = trabajo.titulo;
                this.descripcion = trabajo.descripcion;
                this.estado = trabajo.estado;
            }
        });
    }
    editarTrabajo(){
        this.nuevoTrabajo.titulo = this.myGroup.value.titulo;
        this.nuevoTrabajo.descripcion = this.myGroup.value.descripcion;
        this.nuevoTrabajo.estado = this.myGroup.value.estado;

        this.servicio.editarTrabajo(this.id, this.nuevoTrabajo).subscribe((rest) => {
            window.location.reload();
        });
        this.router.navigate(['/trabajos']);
    }    
}