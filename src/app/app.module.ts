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
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GwWelcomeComponent } from './components/welcome/welcome.component';
import { GwLoginComponent } from './components/navigation/login/login.component';
import { GwNavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ // Telling Angular about the component
    AppComponent,
    GwWelcomeComponent,
    GwLoginComponent,
    GwNavigationComponent
  ],
  bootstrap: [ // Choosing the component that boots
    AppComponent
  ]
})

export class AppModule {

}
