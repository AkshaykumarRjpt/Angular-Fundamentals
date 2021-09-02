import { Routes } from "@angular/router";
import { Error404Component } from "./app/errors/404.comonent";
import {
    EventsListComponent,
    EventListResolver,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    CreateSessionComponent
    } from './app/events/index'
    

export const appRoutes:Routes = [
    {path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events', component: EventsListComponent, resolve:{retrievedevents:EventListResolver}},    
    {path:'404', component: Error404Component},
    {path:'events/session/new', component: CreateSessionComponent},
    {path:'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},
    
    {path:'', redirectTo:'/events' , pathMatch:'full' },
    {
        path:'user', 
        loadChildren: ()=> import('./app/user/user.module')
        .then(m=> m.UserModule)
    }

]