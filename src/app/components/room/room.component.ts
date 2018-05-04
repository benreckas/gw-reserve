import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector    : 'gw-room',
  templateUrl : './room.component.html',
  styleUrls   : ['./room.component.scss']
})

export class GwRoomComponent implements OnInit {

  public id: string;

  constructor(
    private _route: ActivatedRoute
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
  }

}
