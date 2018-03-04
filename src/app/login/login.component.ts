import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

    username: String;
    password: String;

    constructor(private loginService: LoginService, private router: Router) { }

    submitLogin() {
        this.loginService.login();
    }
}
