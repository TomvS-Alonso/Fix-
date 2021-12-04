import { HttpClient } from "@angular/common/http";
import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
    selector: 'loginMaestro',
    templateUrl: './loginMaestro.component.html',
    styleUrls: ['./loginMaestro.component.css']
})
export class LoginMaestroComponent{

    public loginForm!: FormGroup
    constructor(private formbuilder: FormBuilder, private cliente: HttpClient, private router: Router, public alertController: AlertController) { }

    ngOnInit(): void {
        this.loginForm = this.formbuilder.group({
            correo:[''],
            contrasena:['']
        })
    }
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
        this.cliente.get<any>("http://54.174.99.157:3000/maestros")
        .subscribe(response => {
           const usuario = response.find((a:any)=>{
               return a.correo === this.loginForm.value.correo && a.contrasena === this.loginForm.value.contrasena
           });
           if(usuario){
               this.loginForm.reset();
               this.router.navigate(['perfilT'])
           }
           else {
               this.alertaLogin();
           }
           
        })
    }
}