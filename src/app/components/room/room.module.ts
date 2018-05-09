import { NgModule } from '@angular/core';

import { RoomRoutingModule, RoutedComponents } from './room.routing.module';

import { RoomService } from './../../services/room.service';

@NgModule({
  imports: [
    RoomRoutingModule
  ],
  providers: [
    RoomService
  ],
  declarations: [
    RoutedComponents
  ]
})

export class RoomModule { }
