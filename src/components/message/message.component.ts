import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'message',
    templateUrl: 'src/components/message/message.component.html'
})
export class MessageComponent {
    constructor(private router: Router) { }
}