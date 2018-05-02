import { Component, style, OnInit, OnDestroy } from '@angular/core';

import { INavigation } from './../../interfaces/INavigationItem';

@Component({
  selector    : 'gw-navigation',
  templateUrl : './navigation.component.html',
  styleUrls   : ['./navigation.component.scss']
})

export class GwNavigationComponent implements OnInit, OnDestroy {

  public menuItems: INavigation[];
  private showMenu = false;

  constructor() {}

  ngOnInit() { // Angular component lifecycle hook
    this.menuItems = [{
      label: 'welcome',
      url: 'welcome'
    }, {
      label: 'about',
      url: 'about'
    },
    {
      label: 'halo',
      url: 'halo'
    },
    {
      label: 'simcity',
      url: 'simcity'
    },
    {
      label: 'donkey kong',
      url: 'donkey-kong'
    },
    {
      label: 'zelda',
      url: 'zelda'
    }
  ];
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
