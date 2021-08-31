import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'event-thumbnail',
    template: `  
    <div class="well hoverwell thumbnail">
    <h2> {{event.name}}</h2>
    <div> Date: {{event.date}}</div>

    /** ngClass directive is better if you want to toggle multiple classes */
    <div [ngClass] = "getStartTimeclass()" 
  
    [ngSwitch]="event?.time" >
    time: {{event.time}} 
        <span *ngSwitchCase = "'8:00 am'">(Early Start)</span> 
        <span *ngSwitchCase= "'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
    </div>
    <div> Price: \$ {{event.price}}</div>

<div>
   <span>Location:{{event.location?.address}}</span>
   <span class = "pad-left"> {{event.location?.city}}, {{event.location?.country}}</span>
</div>
</div>`,
styles: [ `
.green{ color: #003300 !important}
.bold{font-weight: bold;}
.pad-left {margin-left: 10px;}
.well div {color : #bbb;}`]

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


    getStartTimeclass()
    {
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return {green: isEarlyStart, bold:isEarlyStart} 

        //or

        // if(isEarlyStart)
        //   return ''green bold'
        // return ['green', 'bold']
    }
}