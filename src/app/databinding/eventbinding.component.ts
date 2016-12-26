import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  
  private inputType : String ;
  
  constructor() { 
    this.inputType = 'button';
  }

  public onEventBindingClicked() {
    alert('You Caught it!');

  }
}
