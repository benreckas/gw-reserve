import { Component, style } from '@angular/core';

@Component({
  selector    : 'gw-root', // This is the custom HTML tag for the component
  templateUrl : './app.component.html', // This is the face or presentation for this component
  styleUrls   : ['./app.component.scss']
})

export class AppComponent {
  public welcome = 'Welcome to the app';
}
