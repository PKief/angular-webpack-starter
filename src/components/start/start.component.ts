import { LoginService } from './../login/login.service';
import { Component } from '@angular/core';
// let styles = String(require('./start.component.scss'));

@Component({
    selector: 'start',
    templateUrl: './start.component.html',
    styles: [require('./start.component.scss')]
})
export class StartComponent {
    constructor(private loginService: LoginService) {

    }

    logout(){
        this.loginService.logout();
    }
}