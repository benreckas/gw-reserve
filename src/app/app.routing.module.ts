import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { GwWelcomeComponent } from './components/welcome/welcome.component';
import { GwNotFoundComponent } from './components/not-found/not-found.component';

const routes: Route[] = [ // Order matters. Most specific on top. Catch-all on bottom.
  {
    path: 'welcome',
    component: GwWelcomeComponent
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
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

export const RoutedComponents = [ GwWelcomeComponent, GwNotFoundComponent ];
