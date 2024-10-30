import { Observable } from '@nativescript/core';

export interface ActiveApp {
    id: string;
    name: string;
    icon: string;
    isActive: boolean;
}

export class TaskbarViewModel extends Observable {
    private _activeApps: Array<ActiveApp> = [];
    private _time: string = '';

    constructor() {
        super();
    }

    get activeApps(): Array<ActiveApp> {
        return this._activeApps;
    }

    get time(): string {
        return this._time;
    }

    updateTime(newTime: string) {
        this._time = newTime;
        this.notifyPropertyChange('time', newTime);
    }

    addApp(app: ActiveApp) {
        this._activeApps.push(app);
        this.notifyPropertyChange('activeApps', this._activeApps);
    }

    removeApp(id: string) {
        this._activeApps = this._activeApps.filter(app => app.id !== id);
        this.notifyPropertyChange('activeApps', this._activeApps);
    }

    setActiveApp(id: string) {
        this._activeApps = this._activeApps.map(app => ({
            ...app,
            isActive: app.id === id
        }));
        this.notifyPropertyChange('activeApps', this._activeApps);
    }

    toggleAppMenu() {
        // Implement app menu toggle
        console.log('Toggling app menu');
    }
}