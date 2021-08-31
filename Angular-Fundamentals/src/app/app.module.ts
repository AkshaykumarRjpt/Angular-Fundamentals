import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import {NavBarComponent}  from './nav/navbar.component';
import {EventService} from "./events/shared/event.service"
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRputes } from 'src/routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.comonent';
import { EventRouteActivatorService } from './events/event-route-Activator';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
    RouterModule.forRoot(appRputes)
     
  ],
  providers: [EventService, EventRouteActivatorService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
