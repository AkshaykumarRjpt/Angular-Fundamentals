import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import {NavBarComponent}  from './nav/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { Error404Component } from './errors/404.comonent';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  EventsListComponent,
  EventListResolver,
  EventService,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  CreateSessionComponent,
  
  } from './events/index'
import { AuthService } from './user/auth.service';



@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    CreateEventComponent,
    EventDetailsComponent,
    Error404Component,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
     
  ],
  providers: [EventService, EventRouteActivatorService,
  {provide:'canDeactivateCreateEvent', useValue: checkDirtyState},
  EventListResolver,
  AuthService
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
  {
    return window.confirm('Are you sure you want to navigate? All unsaved data will be lost')
  }
return true;
}