import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { UsuarioServicioService } from "src/app/servicio/usuario-servicio.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm!: FormGroup
    constructor(private formbuilder: FormBuilder, private cliente: HttpClient, private router: Router, public alertController: AlertController) { }

    ngOnInit(): void {
        this.loginForm = this.formbuilder.group({
            correo:[''],
            contrasena:['']
        })
    }

    // alarma que funciona cuando se ingresa un campo mal en el login o no se ingresa nada
    async alertaLogin() {
        const alerta = await this.alertController.create({
          cssClass: 'alerta',
          header: 'Error',
          subHeader: '',
          message: 'Correo y/o contraseña ingresados son incorrectos.',
          buttons: ['Volver a intentar']
        });
        await alerta.present();
    }

    ingreso(){
        this.cliente.get<any>("http://54.174.99.157:3000/usuarios")
        .subscribe(response => {
           const usuario = response.find((a:any)=>{
               // Se verifica si los datos que ingresa ya existen en una base de datos.
               return a.correo === this.loginForm.value.correo && a.contrasena === this.loginForm.value.contrasena
           });
           if(usuario){
               // Se retesea el formulario de login
               this.loginForm.reset();
               this.router.navigate(['principal'])
           }
           else {
               // aqui se llama a la alarma
               this.alertaLogin();
           }
           
        })
    }
}