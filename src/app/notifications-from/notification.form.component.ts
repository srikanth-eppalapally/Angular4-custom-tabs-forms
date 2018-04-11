import { Component, Input } from '@angular/core';

@Component({
    selector: 'notification-form',
    templateUrl: './notification.form.component.html',
    styleUrls: ['./notification.form.component.scss']
})
export class NotificationFromComponent {
    notificationFormValues = {};
    notificationsDuration: Array<any> = [
        {
            name: '7 days',
            value: '7 days'
        },
        {
            name: '8 days',
            value: '8 days'
        },
        {
            name: '9 days',
            value: '9 days'
        }
    ];
    constructor() {
    }


    onNotificationDurationChange(evt) {

    }




}
