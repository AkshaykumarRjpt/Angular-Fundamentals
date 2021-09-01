import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px}
    .error input{background-color:#E3C3C5;}
    .error :: -webkit-input-placeholder {color: #999}
  `]
})
export class ProfileComponent implements OnInit {
 
  constructor(private auth:AuthService, private route:Router){

  }
  firstname!:FormControl
  lastname!: FormControl
  profileForm!:FormGroup
 
  ngOnInit(): void {
    this.firstname = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastname = new FormControl(this.auth.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup ({
      firstName: this.firstname,
      lastName: this.lastname
    })
  }

  validateFirstName(){
    return (this.firstname.invalid &&
      this.firstname.touched)
  }

  validateLastName(){
    return (this.lastname.invalid &&
      this.lastname.touched)
  }

  saveProfile(formValue:any){
    if(this.profileForm.valid)
    {
    this.auth.updateCurrentUser(formValue.firstName, formValue.lastName)
    this.route.navigate(['events'])
    }
  }

  onCancel(){
    this.route.navigate(['events'])
  }
 

 
}