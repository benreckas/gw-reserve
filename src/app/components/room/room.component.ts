import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap, take } from 'rxjs/operators';
import { RoomService } from '../../services/room.service';
import { IRoom } from '../../interfaces/IRoom';

@Component({
  selector    : 'gw-room',
  templateUrl : './room.component.html',
  styleUrls   : ['./room.component.scss']
})

export class GwRoomComponent implements OnInit {

  public id: string;
  private rooms: IRoom[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _roomService: RoomService
  ) { }

  public ngOnInit() {
    this._route.paramMap
      .pipe(
        map(res => {
          return res.get('id') + ' was mapped';
        }),
        // tslint:disable-next-line:quotemark
        // tap(res => console.log("I'm a tap")),
        // take(1)
      )
      .subscribe(data => {
        this.id = data;
      });

    this.rooms = this._roomService['rooms'];
    console.log(this.rooms);
  }

}
