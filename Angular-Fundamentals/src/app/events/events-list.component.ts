import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1> Upcomming Angular Events</h1>
   
    <hr/>

    <event-thumbnail [event]= "Sampleevent" (eventClick)= "handleEventClicked($event)" #thumbnail ></event-thumbnail>
    <h3>{{thumbnail.templateVariable}}</h3>
    <button class="btn btn-primary" (click) = "thumbnail.exampleOfTemplateVaraile()"> log me from child component</button>
</div>
    `
    
})
export class EventsListComponent{

    Sampleevent = {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
          address: '1057 DT',
          city: 'London',
          country: 'England'
        }
    }

    handleEventClicked(data:any){
        console.log('Recieved in Parent Component', data)
    }

}