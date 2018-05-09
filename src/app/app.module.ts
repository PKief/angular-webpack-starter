import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { LoggedInGuard } from './login/logged-in.guard';
import { LoggedOutGuard } from './login/logged-out.guard';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { SettingCategoryComponent } from './settings/settingCategory.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsResolver } from './settings/settings.resolver';
import { StartComponent } from './start/start.component';
import { TranslationModule } from './translation/translation.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    TranslationModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SettingsComponent,
    SettingCategoryComponent,
    StartComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    MessageComponent,
  ],
  providers: [
    LoggedInGuard,
    LoggedOutGuard,
    SettingsResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
