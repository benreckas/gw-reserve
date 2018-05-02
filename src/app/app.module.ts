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
import { GwZeldaComponent } from './components/zelda/zelda.component';
import { GwSimcityComponent } from './components/simcity/simcity.component';
import { GwHaloComponent } from './components/halo/halo.component';
import { GwDonkeyKongComponent } from './components/donkey-kong/donkey-kong.component';

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
    component: GwHaloComponent,
    path: 'halo'
  },
  {
    component: GwSimcityComponent,
    path: 'simcity'
  },
  {
    component: GwDonkeyKongComponent,
    path: 'donkey-kong'
  },
  {
    component: GwZeldaComponent,
    path: 'zelda'
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
    GwZeldaComponent,
    GwSimcityComponent,
    GwHaloComponent,
    GwDonkeyKongComponent
  ],
  bootstrap: [ // Choosing the component that boots
    AppComponent
  ]
})

export class AppModule {

}
