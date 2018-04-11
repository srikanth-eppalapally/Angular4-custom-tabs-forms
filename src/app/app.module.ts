import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {CalendarModule} from 'primeng/calendar';

import { AppComponent } from './app.component';
import { UIModalComponent } from './ui-modal/ui.modal.component';
import { UITabsComponent } from './ui-tabs/ui.tabs.component';
import { UITabComponent } from './ui-tabs/ui.tab.component';
import { GeneralFormComponent } from './general-form/general.form.component';
import { UISelectComponent } from './ui-select/ui.select.component';
import { NotificationFromComponent } from './notifications-from/notification.form.component';


@NgModule({
  declarations: [
    AppComponent,
    UIModalComponent,
    UITabsComponent,
    UITabComponent,
    GeneralFormComponent,
    UISelectComponent,
    NotificationFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
