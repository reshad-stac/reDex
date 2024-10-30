import { Observable, Utils, Device, Frame } from '@nativescript/core';
import { TaskbarViewModel } from './components/taskbar/taskbar-view-model';
import { WindowManagerViewModel } from './components/window/window-manager-view-model';

export class MainViewModel extends Observable {
    private _isExternalDisplayConnected: boolean = false;
    private _connectionStatus: string = 'Waiting for connection...';
    private taskbarVM: TaskbarViewModel;
    private windowManagerVM: WindowManagerViewModel;

    constructor() {
        super();
        this.taskbarVM = new TaskbarViewModel();
        this.windowManagerVM = new WindowManagerViewModel();
        this.checkDisplayConnection();
        this.startTimeUpdate();
    }

    get isExternalDisplayConnected(): boolean {
        return this._isExternalDisplayConnected;
    }

    get connectionStatus(): string {
        return this._connectionStatus;
    }

    set connectionStatus(value: string) {
        if (this._connectionStatus !== value) {
            this._connectionStatus = value;
            this.notifyPropertyChange('connectionStatus', value);
        }
    }

    checkDisplayConnection() {
        // Simulate display detection
        if (Device.sdkVersion) {
            this._isExternalDisplayConnected = !this._isExternalDisplayConnected;
            this.notifyPropertyChange('isExternalDisplayConnected', this._isExternalDisplayConnected);
            
            this.connectionStatus = this._isExternalDisplayConnected 
                ? 'External display connected! Starting Re-Dex...'
                : 'No external display detected. Please connect a display and try again.';
        }
    }

    private startTimeUpdate() {
        setInterval(() => {
            const now = new Date();
            this.taskbarVM.updateTime(now.toLocaleTimeString());
        }, 1000);
    }

    getTaskbarViewModel(): TaskbarViewModel {
        return this.taskbarVM;
    }

    getWindowManagerViewModel(): WindowManagerViewModel {
        return this.windowManagerVM;
    }
}