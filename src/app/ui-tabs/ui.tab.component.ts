import { Component, Input, OnInit } from '@angular/core';
import { UITabsComponent } from './ui.tabs.component';

@Component({
    selector: 'ui-tab',
    templateUrl: './ui.tab.component.html',
    styleUrls: ['./ui.tab.component.scss']
})
export class UITabComponent implements OnInit {
    @Input() tabHeading;
    constructor(private uiTabsComponent: UITabsComponent) { }

    ngOnInit() {
        this.uiTabsComponent.addUiTab(this);
    }
}