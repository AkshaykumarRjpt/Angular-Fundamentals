import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { EventsListComponent } from "./app/events/events-list.component";
import { Routes } from "@angular/router";
export const appRputes:Routes = [

    {path:'events', component: EventsListComponent},
    {path:'events/:id', component: EventDetailsComponent},
    {path:'', redirectTo:'/events' , pathMatch:'full' }
]