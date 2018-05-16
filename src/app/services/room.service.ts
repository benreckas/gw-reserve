import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

// Importing an observabe creation method
import { of } from 'rxjs/observable/of';

// Importing rxjs operators to manipulate or mutate data
import { map, tap, take, retry } from 'rxjs/operators';

import { IRoom } from '../interfaces/IRoom';


@Injectable()

export class RoomService {
  public rooms: Observable<IRoom[]>;

  constructor() {
    this.rooms = of([
      {
        id: '1',
        title: 'zelda',
        picture: 'zelda.jpg'
      },
      {
        id: '2',
        title: 'donkey-kong',
        picture: 'donkey-kong.jpg'
      },
      {
        id: '3',
        title: 'halo',
        picture: 'halo.jpg'
      },
      {
        id: '4',
        title: 'simcity',
        picture: 'simcity.jpg'
      }
    ]);
  }

  writeRoomReservation(roomId, reservation) {
    console.log('writeRoomReservation: ', roomId, reservation);
  }

  deleteRoomReservation(roomId, reservationId) {
    console.log('deleteRoomReservation: ', roomId, reservationId);
  }

}
