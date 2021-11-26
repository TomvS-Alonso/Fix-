import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ITrabajo } from "src/app/servicio/ITrabajo";
import { AlertController } from '@ionic/angular';
import { TrabajoServicioService } from "src/app/servicio/trabajo-servicio.service";

@Component({
    selector: 'listar',
    templateUrl: './listar.component.html',
    styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
    private url: string = 'http://localhost:3000/trabajos';

    // titulo: string;
    // descripcion: string;
    // estado: string;
    
    trabajos: Array<ITrabajo>

    constructor(private cliente: HttpClient, private servicio: TrabajoServicioService, public alertController: AlertController) { }

    ngOnInit() {
        this.cliente.get<any>(this.url).subscribe((response) => {
            this.trabajos = response;

        })
        // this.cliente.get<any>(this.url).subscribe((response) => {
        //     const trabajo = response.find((encontrado:any) =>{
        //         return encontrado.id === this.id; 
        //     });
        //     if(trabajo) {
        //         this.titulo = trabajo.titulo;
        //         this.descripcion = trabajo.descripcion;
        //         this.estado = trabajo.estado;
        //     }
        // });
    }
    // eliminarTrabajo() {
    //     this.servicio.eliminarTrabajo(this.id).subscribe(respuesta => console.log(respuesta))
    // }
    async alertaEliminacion(id: number) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Eliminar trabajo',
            subHeader: '',
            message: '¿Esta seguro que desea eliminar este trabajo?',
            buttons: ['Cancelar',
                {
                    text: 'Eliminar',
                    handler: () => {
                        this.servicio.eliminarTrabajo(id).subscribe(respuesta => respuesta);
                        window.location.reload();
                    }
                    
                }]
        });

        await alert.present();
    }
}