import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'general-from',
    templateUrl: './general.form.component.html',
    styleUrls: ['./general.form.component.scss']
})
export class GeneralFormComponent {
    constructor() {
    }

    onLanguageChange(evt) {
        console.log('langauge change event', evt);
    }
    onDisplayNameChange(evt) {
        console.log('display change event', evt);
    }
    onPlaceHolderChange(evt) {
        console.log('placeholder change event', evt);
    }
    onSytemTimeOutChange(evt) {
        console.log('SytemTimeOut change event', evt);
    }


    generalFormValues = {

    };
    languages: Array<any> = [
        {
            name: 'English',
            value: 'english'
        },
        {
            name: 'French',
            value: 'french'
        },
        {
            name: 'Russian',
            value: 'russian'
        }
    ];
    displayNames: Array<any> = [
        {
            name: 'firstName, lastName',
            value: 'firstName, lastName'
        },
        {
            name: 'firstName  lastName',
            value: 'firstName  lastName'
        },
        {
            name: 'lastName firstName',
            value: 'lastName firstName'
        }
    ];
    placeHolders: Array<any> = [
        {
            name: 'placeHolder',
            value: 'placeHolder'
        },
        {
            name: 'placeHolder1',
            value: 'placeHolder1'
        },
        {
            name: 'placeHolder2',
            value: 'placeHolder2'
        }
    ];

    systemTimeOuts: Array<any> = [
        {
            name: '15 minutes',
            value: '15 minutes'
        },
        {
            name: '10 minutes',
            value: '10 minutes'
        },
        {
            name: '5 minutes',
            value: '5 minutes'
        }
    ];


}
