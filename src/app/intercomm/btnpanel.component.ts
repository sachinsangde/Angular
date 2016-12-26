import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btnpanel',
  templateUrl: './btnpanel.component.html',
  styleUrls: ['./btnpanel.component.css']
})
export class BtnpanelComponent {

@Output() private heroClick : EventEmitter<String>;

constructor() {
  this.heroClick = new EventEmitter<String>();
}
  public onHeroClick(hero : String) {

    let heroLink ='';
    if(hero == 'batMan') heroLink = '../../assets/dark-knight.jpg';
    else if (hero == 'spiderMan') heroLink = '../../assets/spiderman.jpg';
    else heroLink = '../../assets/ironman.png';
    this.heroClick.emit(heroLink);
}


}
