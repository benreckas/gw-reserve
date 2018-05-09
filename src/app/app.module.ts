import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutedComponents } from './app.routing.module';
import { RoomModule } from './components/room/room.module';

import { AppComponent } from './app.component';
import { GwNavigationComponent } from './../app/components/navigation/navigation.component';
import { GwLoginComponent } from './components/navigation/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    RoomModule,
    AppRoutingModule
  ],
  declarations: [ // Telling Angular about the component
    AppComponent,
    GwNavigationComponent,
    GwLoginComponent,
    RoutedComponents
  ],
  bootstrap: [ // Choosing the component that boots
    AppComponent
  ]
})

export class AppModule {

}
