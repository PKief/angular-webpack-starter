import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation.component';

require('./../../public/scss/styles.global.scss');

@Component({
  selector: 'my-app',  
  templateUrl: './app.component.html',
  styles: [ require('./app.component.scss') ] 
})
export class AppComponent { }
