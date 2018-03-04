import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    constructor(private router: Router) { }
}
