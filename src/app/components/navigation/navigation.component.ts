import { Component, style, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { INavigation } from './../../interfaces/INavigationItem';
import { IRoom } from '../../interfaces/IRoom';
import { RoomService } from '../../services/room.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector    : 'gw-navigation',
  templateUrl : './navigation.component.html',
  styleUrls   : ['./navigation.component.scss']
})

export class GwNavigationComponent implements OnInit, OnDestroy {

  public menuItems: INavigation[];
  public showMenu = false;

  constructor(
    private _roomService: RoomService,
    private _router: Router
  ) {}

  ngOnInit() { // Angular component lifecycle hook
    this.buildMenu();
  }

  private buildMenu() {
    this.menuItems = [
      {
        label: 'Welcome',
        url: 'welcome'
      }
    ];

    this._roomService.rooms
      .pipe(
        map((rooms: IRoom[]) => {
          const navItems: INavigation[] = rooms.map(room => {
            return {
              label: room.title,
              url: `room/${room.id}`
            };
          });
          return navItems;
        }
        )
      )
      .subscribe(res => {
        console.log('Res: ', res);
        res.forEach(room => {
          console.log('Room: ', room);
          this.menuItems.push(room);
        });
      });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
