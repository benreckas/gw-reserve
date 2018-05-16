import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'gw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class GwLoginComponent implements OnInit {
  public loggedInUser;
  public loginBtnText: string;

  constructor(
    private _actvatedRoute: ActivatedRoute,
    private _loginService: LoginService
  ) {
    this._loginService.getUser()
      .map(user => {
        if (!user) {
          return;
        }

        return {
          displayName: user.displayName,
          photoURL: user.photoURL
        };
      })
      .subscribe(user => {
        this.loggedInUser = user;
        console.log('Currently logged in user: ', this.loggedInUser);
      });

  }

  ngOnInit() {
    this.loggedInUser ? this.loginBtnText = 'Logout' : this.loginBtnText = 'Logout';
    console.log('User on init: ', this.loggedInUser);
  }

  public toggleLogin() {
    if (!this.loggedInUser) {
      this.login();
      this.loginBtnText = 'Logout';
    } else {
      this.logout();
      this.loginBtnText = 'Login';
    }
  }

  public login() {
    this._loginService.login();
    console.log('|========== LOGIN RAN ==========|');
  }

  public logout() {
    this._loginService.logout();
    console.log('|========== LOGOUT RAN ==========|');
  }
}
