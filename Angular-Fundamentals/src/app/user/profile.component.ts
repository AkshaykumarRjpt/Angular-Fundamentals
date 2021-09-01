import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: []
})
export class ProfileComponent implements OnInit {
 
  constructor(private auth:AuthService, private route:Router){

  }
  profileForm!:FormGroup
 
  ngOnInit(): void {
    let firstname = new FormControl(this.auth.currentUser.firstName)
    let lastname = new FormControl(this.auth.currentUser.lastName)

    this.profileForm = new FormGroup ({
      firstName: firstname,
      lastName: lastname
    })
  }

  saveProfile(formValue:any){
    this.auth.updateCurrentUser(formValue.firstName, formValue.lastName)
    this.route.navigate(['events'])
  }

  onCancel(){
    this.route.navigate(['events'])
  }
 

 
}