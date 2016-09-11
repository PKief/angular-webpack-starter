import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styles: [ require('./navigation.component.scss') ] 
})
export class Navigation { 
    constructor(private loginService: LoginService){ }
    
    logout() {
        this.loginService.logout();        
    }    
}
