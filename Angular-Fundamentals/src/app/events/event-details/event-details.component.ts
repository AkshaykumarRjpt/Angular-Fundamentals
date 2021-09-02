import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from "../shared";

@Component({
    templateUrl:'./event-details.component.html',
    styles: [`.container { padding-left:20px; padding-right: 20px}
    .event-image {height: 100px}
    a{cursor:pointer}`]
})
export class EventDetailsComponent implements OnInit {
    

    event!:IEvent
    addmode:boolean = false
    constructor(private eventService: EventService, private route: ActivatedRoute){

    }

    ngOnInit() {
      this.event =  this.eventService.getEvent(+this.route.snapshot.params['id'])

    }

    addSession()
    {
      this.addmode = true;
    }

    saveSession(newsession:ISession){
      var maxid = Math.max.apply(this.event.sessions.map(s=> s.id))
      var sessionid = maxid +1;
      newsession.id = sessionid
      this.event.sessions.push(newsession)
      this.eventService.updateEvent(this.event);
      this.addmode= false;
    }

    cancelAddSession()
    {
      this.addmode= false;
    }

}