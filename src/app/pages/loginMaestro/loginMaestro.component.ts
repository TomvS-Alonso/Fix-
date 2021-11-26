import { HttpClient } from "@angular/common/http";
import { Component,OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
    selector: 'loginMaestro',
    templateUrl: './loginMaestro.component.html',
    styleUrls: ['./loginMaestro.component.css']
})
export class LoginMaestroComponent{

    public loginForm!: FormGroup
    constructor(private formbuilder: FormBuilder, private cliente: HttpClient, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.formbuilder.group({
            correo:[''],
            contrasena:['']
        })
    }

    ingreso(){
        this.cliente.get<any>("http://localhost:3000/maestros")
        .subscribe(response => {
           const usuario = response.find((a:any)=>{
               return a.correo === this.loginForm.value.correo && a.contrasena === this.loginForm.value.contrasena
           });
           if(usuario){
               this.loginForm.reset();
               this.router.navigate(['principal'])
           }
           
        })
    }
}