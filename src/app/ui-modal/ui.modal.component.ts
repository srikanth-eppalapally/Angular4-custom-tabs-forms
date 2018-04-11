import { Component } from '@angular/core';
@Component({
    selector: 'ui-modal',
    templateUrl: './ui.modal.component.html',
    styleUrls: ['./ui.modal.component.scss']
})
export class UIModalComponent {
    public uiModalDisplayFlag = false;
    constructor() { }
    public openUiModal(): void {
        this.uiModalDisplayFlag = true;
    }
    public closeUiModal(): void {
        this.uiModalDisplayFlag = false;
    }


}