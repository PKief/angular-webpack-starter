import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { SettingsComponent } from '../settings/settings.component';
import { SettingCategoryComponent } from './../settings/settingCategory.component';
import { SettingsResolver } from './../settings/settings.resolver';
import { SettingsService } from './../settings/settings.service';
import { LoginService } from '../login/login.service';
import { LoggedInGuard } from '../login/logged-in.guard';
import { LoggedOutGuard } from '../login/logged-out.guard';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';
import { StartComponent } from '../start/start.component';
import { WelcomeComponent } from '../welcome/welcome.component';

import { routing, APP_ROUTES_MODULE_PROVIDER } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SettingsComponent,
    SettingCategoryComponent,    
    StartComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    LoginService,
    LoggedInGuard,
    LoggedOutGuard,
    APP_ROUTES_MODULE_PROVIDER,
    SettingsService,
    SettingsResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
