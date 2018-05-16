import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoomRoutingModule, RoutedComponents } from './room.routing.module';

import { RoomService } from './../../services/room.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
