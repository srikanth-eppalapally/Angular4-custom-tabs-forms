import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ui-select',
    templateUrl: './ui.select.component.html',
    styleUrls: ['./ui.select.component.scss']
})
export class UISelectComponent {
    @Input() selectedOption;
    @Input() name;
    @Input() required;
    @Input() options;
    @Output() onChangeUiSelect = new EventEmitter();
    constructor() {
    }

    onSelectChange() {
        this.onChangeUiSelect.next(this.selectedOption);
    }


}
