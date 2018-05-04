import { Injectable } from '@angular/core';
import { IRoom } from '../interfaces/IRoom';

@Injectable()

export class RoomService {
  public rooms: IRoom[];

  constructor() {
    this.rooms = [
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
    ];
  }
}
