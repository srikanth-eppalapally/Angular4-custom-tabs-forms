import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("uiTabsModal") uiTabsModal;
  constructor(){

  }

  openTabsModal(){
    this.uiTabsModal.openUiModal();
  }

  closeTabsModal(){
    this.uiTabsModal.closeUiModal();
  }
}
