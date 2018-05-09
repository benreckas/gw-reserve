import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { GwRoomComponent } from './room.component';
import { GwReservationFormComponent } from './reservation-form/reservation-form.component';
import { GwReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Route[] = [
  {
    path: 'room/:id',
    component: GwRoomComponent,
    children: [
      {
        path: 'form',
        component: GwReservationFormComponent
      },
      {
        path: 'list',
        component: GwReservationListComponent
      },
      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class RoomRoutingModule { }

export const RoutedComponents = [ GwRoomComponent, GwReservationFormComponent, GwReservationListComponent ];
