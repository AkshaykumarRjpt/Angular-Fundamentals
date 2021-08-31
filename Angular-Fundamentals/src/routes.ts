import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { EventsListComponent } from "./app/events/events-list.component";
import { Routes } from "@angular/router";
import { CreateEventComponent } from "./app/events/create-event.component";
import { Error404Component } from "./app/errors/404.comonent";
import { EventRouteActivatorService } from "./app/events/event-route-Activator";
import { EventListResolver } from "./app/events/events-list-resolver.service";

export const appRoutes:Routes = [
    {path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events', component: EventsListComponent, resolve:{retrievedevents:EventListResolver}},
    {path:'404', component: Error404Component},
    {path:'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},
    {path:'', redirectTo:'/events' , pathMatch:'full' },
    {
        path:'user', 
        loadChildren: ()=> import('./app/user/user.module')
        .then(m=> m.UserModule)
    }
]