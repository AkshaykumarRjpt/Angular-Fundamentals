import { Component, OnInit } from "@angular/core";
import { ToastrComponentlessModule } from "ngx-toastr";
import { EventService } from "./shared/event.service";
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1> Upcomming Angular Events</h1>
   
    <hr/>
    <div class="row">
        <div *ngFor="let Sampleevent of Sampleevents" class="col-md-5">
            <event-thumbnail (click)="handleThumbnailClick(Sampleevent.name)" [event]= "Sampleevent"  ></event-thumbnail>
        </div>
    </div>
</div>
    `
    
})
export class EventsListComponent implements OnInit{

    Sampleevents:any[] = []

    constructor(private eventService: EventService, private toastr: ToastrService)
    {
        
    }

    handleThumbnailClick(eventName:any){
        console.log("clicked")
        this.toastr.show(eventName)
        this.toastr.success(eventName)
    }


    ngOnInit(){
        this.Sampleevents = this.eventService.getEvents()
    }
} 