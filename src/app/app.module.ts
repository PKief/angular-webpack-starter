import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LoginComponent } from "./login/login.component";
import { SettingsComponent } from "./settings/settings.component";
import { SettingCategoryComponent } from "./settings/settingCategory.component";
import { StartComponent } from "./start/start.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./pagenotfound/pagenotfound.component";
import { MessageComponent } from "./message/message.component";
import { LoginService } from "./login/login.service";
import { LoggedInGuard } from "./login/logged-in.guard";
import { LoggedOutGuard } from "./login/logged-out.guard";
import { SettingsService } from "./settings/settings.service";
import { SettingsResolver } from "./settings/settings.resolver";
import { TranslationModule } from './translation/translation.module';
import { RoutingModule } from './app.routing';

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
    LoginService,
    LoggedInGuard,
    LoggedOutGuard,
    SettingsService,
    SettingsResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
