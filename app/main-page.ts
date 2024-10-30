import { EventData, Page, View } from '@nativescript/core';
import { MainViewModel } from './main-view-model';

let mainViewModel: MainViewModel;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    mainViewModel = new MainViewModel();
    page.bindingContext = mainViewModel;
}

export function loadTaskbar(args: EventData) {
    const taskbarView = <View>args.object;
    taskbarView.bindingContext = mainViewModel.getTaskbarViewModel();
}

export function loadWindowManager(args: EventData) {
    const windowManagerView = <View>args.object;
    windowManagerView.bindingContext = mainViewModel.getWindowManagerViewModel();
}

export function loadAppGrid(args: EventData) {
    const appGridView = <View>args.object;
    appGridView.bindingContext = mainViewModel.getTaskbarViewModel();
}