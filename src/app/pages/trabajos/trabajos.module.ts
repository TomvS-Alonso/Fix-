import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { TrabajosRoutingModule } from './trabajos-routing.module';
import { FormsModule } from '@angular/forms';
import { TrabajoServicioService } from 'src/app/servicio/trabajo-servicio.service';

@NgModule({
    declarations: [
      AgregarComponent,
      ListarComponent,
      ModificarComponent,
    ],
    imports: [
      CommonModule,
      TrabajosRoutingModule,
      FormsModule
    ],
    providers: [TrabajoServicioService]
  })
  export class TrabajosModule { }