import { Component, style, OnInit, OnDestroy } from '@angular/core';

import { INavigation } from './../../interfaces/INavigationItem';

@Component({
  selector    : 'gw-navigation',
  templateUrl : './navigation.component.html',
  styleUrls   : ['./navigation.component.scss']
})

export class GwNavigationComponent implements OnInit, OnDestroy {

  public menuItems: INavigation[];

  constructor() {}

  ngOnInit() { // Angular component lifecycle hook
    this.menuItems = [{
      label: 'home',
      url: '/'
    }, {
      label: 'about',
      url: '/about'
    }, {
      label: 'contact',
      url: '/contact'
    }];
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
