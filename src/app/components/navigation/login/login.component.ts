import * as firebase from 'firebase';

import { Component, style, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'gw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class GwLoginComponent implements OnInit {
  public userObservable: Observable<firebase.User>;

  constructor(
    private _actvatedRoute: ActivatedRoute,
    private _auth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.userObservable = this._auth.authState;

    this.userObservable.subscribe(user => console.log(user));
  }

  public login() {
    this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // this._auth.auth.signOut();
}
