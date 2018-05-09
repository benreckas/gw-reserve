import { Component, style, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { INavigation } from './../../interfaces/INavigationItem';
import { IRoom } from '../../interfaces/IRoom';
import { RoomService } from '../../services/room.service';
import { Title } from '@angular/platform-browser';

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
    this.menuItems = [{
      label: 'Welcome',
      url: 'welcome'
    }
    // , {
    //   label: 'About',
    //   url: 'about'
    // }
    ];

    const roomItems: INavigation[] = this._roomService.rooms.map(room => {
      return {
        label: room.title,
        url: `room/${room.id}`
      };
    });

    roomItems.forEach(roomItem => this.menuItems.push(roomItem));
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
