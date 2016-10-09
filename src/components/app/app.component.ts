import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation.component';

require('./../../styles/styles.global.scss');
require('./../../images/favicon.ico');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [require('./app.component.scss')]
})
export class AppComponent { }
