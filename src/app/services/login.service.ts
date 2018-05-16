import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()

export class LoginService {
  private _loggedInUser: Observable<firebase.User>;

  constructor(
    private _auth: AngularFireAuth
  ) {
    this._loggedInUser = _auth.authState;
  }

  public getUser(): Observable<firebase.User> {
    return this._loggedInUser;
  }

  public login(): Promise<any> {
    return this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(err => console.log(err));
  }

  public logout(): Promise<any> {
    return this._auth.auth.signOut()
      .catch(err => console.log(err));
  }

}
