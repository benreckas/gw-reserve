import { Component, style, OnInit, OnDestroy } from '@angular/core';

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
    private _roomService: RoomService
  ) {}

  ngOnInit() { // Angular component lifecycle hook

    this.menuItems = [{
      label: 'Welcome',
      url: 'welcome'
    }, {
      label: 'About',
      url: 'about'
    }];

    const roomItems: INavigation[] = this._roomService.rooms.map(room => {
      return {
        label: room.title,
        url: `room/${room.id}`
      };
    });

    roomItems.forEach(roomItem => this.menuItems.splice(1, 0, roomItem));

    // this.menuItems = [
    //   {
    //     label: 'welcome',
    //     url: 'welcome'
    //   },
    //   {
    //     label: 'about',
    //     url: 'about'
    //   },
    //   {
    //     label: 'halo',
    //     url: 'halo'
    //   },
    //   {
    //     label: 'simcity',
    //     url: 'simcity'
    //   },
    //   {
    //     label: 'donkey kong',
    //     url: 'donkey-kong'
    //   },
    //   {
    //     label: 'zelda',
    //     url: 'zelda'
    //   }
    // ];
    console.log(this.navItems);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
