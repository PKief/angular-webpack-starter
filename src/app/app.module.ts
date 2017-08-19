import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { routing, APP_ROUTES_MODULE_PROVIDER } from './app.routing';
import { LoginComponent } from "./login/login.component";
import { SettingsComponent } from "./settings/settings.component";
import { SettingCategoryComponent } from "./settings/settingCategory.component";
import { StartComponent } from "./start/start.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./pagenotfound/pagenotfound.component";
import { MessageComponent } from "./message/message.component";
import { TranslatePipe, TRANSLATION_PROVIDERS, TranslationService } from "./translation";
import { LoginService } from "./login/login.service";
import { LoggedInGuard } from "./login/logged-in.guard";
import { LoggedOutGuard } from "./login/logged-out.guard";
import { SettingsService } from "./settings/settings.service";
import { SettingsResolver } from "./settings/settings.resolver";

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
    PageNotFoundComponent,
    MessageComponent,
    TranslatePipe,
  ],
  providers: [
    LoginService,
    LoggedInGuard,
    LoggedOutGuard,
    APP_ROUTES_MODULE_PROVIDER,
    SettingsService,
    SettingsResolver,
    TRANSLATION_PROVIDERS,
    TranslationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
