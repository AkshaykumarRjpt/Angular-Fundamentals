import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html',
    styles:[`
    em {float:right; color:#E05C65; padding-left:10px}
    `]
})
export class LoginComponent{

    constructor(private authService: AuthService, private router:Router){

    }
    userName:any
    password:any
    mouseoverLogin!:boolean

    login(formValues:any){
        this.authService.loginUser(formValues.userName, formValues.password)
        if(this.authService.isAuthenticated())
        {
        this.router.navigate(['events'])
        }
        console.log(formValues)
    }

    cancel(){
         
        this.router.navigate(['events'])
    }
   
}