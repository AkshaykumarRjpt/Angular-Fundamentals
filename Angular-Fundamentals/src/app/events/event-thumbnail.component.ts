import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'event-thumbnail',
    template: `  
    <div class="well hoverwell thumbnail">
    <h2> {{event.name}}</h2>
    <div> Date: {{event.date}}</div>
    <div> time: {{event.time}}</div>
    <div> Price: /$ {{event.price}}</div>

<div>
   <span>Location:{{event.location.address}}</span>
   <span> {{event.location.city}}, {{event.location.country}}</span>
</div>
 <button class="btn btn-primary" (click) ="handleClickMe()">Click me!!</button>

</div>`

})
export class EventThumbnailComponent
{

    @Input() event:any

    templateVariable:string = "access this property from parent component through Template reference Variable"
   
    @Output() eventClick = new EventEmitter();

    handleClickMe(){
        console.log('Clicked!!')
        this.eventClick.emit(this.event.name)
        
    }

    exampleOfTemplateVaraile()
    {
        console.log("this method can be executed from the parent component through template referece Variable #thumbnail")
    }
}