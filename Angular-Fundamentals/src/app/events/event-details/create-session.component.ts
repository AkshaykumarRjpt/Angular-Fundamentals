import { invalid } from "@angular/compiler/src/render3/view/util";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ISession } from "../index";
@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html',
    styles: [`
  em {float:right; color:#E05C65; padding-left:10px}
  .error input, .error select, .error textarea {background-color:#E3C3C5;}
  .error :: -webkit-input-placeholder {color: #999}
  .error : -moz-placeholder {color: #999}
  .error :: -moz-placeholder {color: #999}
  .error :ms-input-placeholder {color: #999}
`]
    
})
export class CreateSessionComponent implements OnInit{
    
    constructor(private route: Router){

    }

    formgroup!: FormGroup
    @Output() newsession = new EventEmitter<ISession>();
    @Output() cancelAddSession = new EventEmitter();
    name!:FormControl
    presenter!:FormControl
    duration!:FormControl
    level!:FormControl
    abstract!:FormControl
    
    ngOnInit(){
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, 
            Validators.maxLength(400), this.restrictedWords(['chutiya','gaandu'])]);

        this.formgroup = new FormGroup({

            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract  
        })
    }

    restrictedWords(words: string[])  {
    return (control:FormControl):{[key:string]: any } | null =>{
        if(!words) return null

        var invalidWords = words
        .map(w => control.value.includes(w) ? w : null)
        .filter(w => w != null)

        return invalidWords && invalidWords.length>0 
        ? { 'restrictedWords':invalidWords.join(',')}
        : null
    }
}

    saveSession(formValues:any){
        let session= {
            id: 0,
            name:formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter:formValues.presenter,
            abstract:formValues.abstract,
            voters:[]        
        }
        this.newsession.emit(session);
        console.log(session)
    }

    onCancel()
    {
        this.cancelAddSession.emit()
    }
}