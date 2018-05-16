import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule, RoutedComponents } from './app.routing.module';
import { RoomModule } from './components/room/room.module';

import { AppComponent } from './app.component';
import { GwNavigationComponent } from './../app/components/navigation/navigation.component';
import { GwLoginComponent } from './components/navigation/login/login.component';
import { environment } from '../environments/environment';

import { RoomService } from './services/room.service';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    BrowserModule,
    RoomModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [ // Telling Angular about the component
    AppComponent,
    GwNavigationComponent,
    GwLoginComponent,
    RoutedComponents
  ],
  providers: [
    AngularFireAuth,
    RoomService,
    LoginService
  ],
  bootstrap: [ // Choosing the component that boots
    AppComponent
  ]
})

export class AppModule {

}
