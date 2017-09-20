import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setting } from './setting';

let SETTINGS = [
    new Setting('password', 'change your password', "profile"),
    new Setting('username', 'change your username', "profile"),
    new Setting('notifications', 'change your notifications', "basic"),
    new Setting('timezone', 'change your timezone', "basic"),
];

let settingsPromise = Promise.resolve(SETTINGS);

@Injectable()
export class SettingsService {
    getAllSettings() {
        return settingsPromise;
    }
    // get the settings from the given category
    getSettingsFromCategory(category: string): Promise<Setting[]> {
        return settingsPromise.then(settings => settings.filter((s: Setting) => s.category === category));
    }
}