import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation.component';
// let styles = String(require('./start.component.scss'));

@Component({
    selector: 'start',
    templateUrl: './start.component.html',
    styles: [ require('./start.component.scss') ] 
})
export class StartComponent { }