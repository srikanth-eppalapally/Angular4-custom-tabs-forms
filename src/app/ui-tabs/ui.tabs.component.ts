import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
    selector: 'ui-tabs',
    templateUrl: './ui.tabs.component.html',
    styleUrls: ['./ui.tabs.component.scss']
})
export class UITabsComponent {
    @Input() tabAlign;
    tabs: Array<any> = [];
    @Output() selectedEvent = new EventEmitter();

    addUiTab(tab) {
        if (!this.tabs.length) {
            tab.selected = true;
        }
        this.tabs.push(tab);
    }

    selectUiTab(tab) {
        this.tabs.map((tab) => {
            tab.selected = false;
        })
        tab.selected = true;
        this.selectedEvent.emit({ selectedTab: tab });
    }
}