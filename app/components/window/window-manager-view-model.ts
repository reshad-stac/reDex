import { Observable } from '@nativescript/core';

export interface Window {
    id: string;
    title: string;
    x: number;
    y: number;
    width: number;
    height: number;
    content: any;
    isMaximized: boolean;
    isMinimized: boolean;
}

export class WindowManagerViewModel extends Observable {
    private _windows: Array<Window> = [];

    constructor() {
        super();
    }

    get windows(): Array<Window> {
        return this._windows;
    }

    addWindow(window: Window) {
        this._windows.push(window);
        this.notifyPropertyChange('windows', this._windows);
    }

    removeWindow(id: string) {
        this._windows = this._windows.filter(window => window.id !== id);
        this.notifyPropertyChange('windows', this._windows);
    }

    minimizeWindow(id: string) {
        const window = this._windows.find(w => w.id === id);
        if (window) {
            window.isMinimized = true;
            this.notifyPropertyChange('windows', this._windows);
        }
    }

    maximizeWindow(id: string) {
        const window = this._windows.find(w => w.id === id);
        if (window) {
            window.isMaximized = !window.isMaximized;
            this.notifyPropertyChange('windows', this._windows);
        }
    }

    bringToFront(id: string) {
        const windowIndex = this._windows.findIndex(w => w.id === id);
        if (windowIndex > -1) {
            const window = this._windows.splice(windowIndex, 1)[0];
            this._windows.push(window);
            this.notifyPropertyChange('windows', this._windows);
        }
    }
}