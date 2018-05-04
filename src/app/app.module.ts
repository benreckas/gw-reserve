// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   bootstrap: [
//     AppComponent
//   ]
// })

// export class AppModule {

// }

import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GwWelcomeComponent } from './components/welcome/welcome.component';
import { GwAboutComponent } from './components/about/about.component';
import { GwLoginComponent } from './components/navigation/login/login.component';
import { GwNavigationComponent } from './components/navigation/navigation.component';
import { GwNotFoundComponent } from './components/not-found/not-found.component';
import { GwRoomComponent } from './components/room/room.component';

import { RoomService } from './services/room.service';

const routes: Route[] = [ // Order matters. Most specific on top. Catch-all on bottom.
  {
    component: GwWelcomeComponent,
    path: 'welcome'
  },
  {
    component: GwAboutComponent,
    path: 'about'
  },
  {
    component: GwRoomComponent,
    path: 'room/:id'
  },
  { // Redirect to www.url.com/welcome
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  { // Catch-all 404 Page
    path: '**',
    component: GwNotFoundComponent
  }
];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ // Telling Angular about the component
    AppComponent,
    GwWelcomeComponent,
    GwAboutComponent,
    GwNotFoundComponent,
    GwLoginComponent,
    GwNavigationComponent,
    GwRoomComponent
  ],
  providers: [
    RoomService
  ],
  bootstrap: [ // Choosing the component that boots
    AppComponent
  ]
})

export class AppModule {

}
