import { Component } from '@angular/core';

@Component({
  selector: 'app-demoexample',
  templateUrl: './demoexample.component.html',
  styleUrls: ['./demoexample.component.css']
})
export class DemoexampleComponent {

  private clickedCartoon : String;

  public onCartoonClicked(cartoon : String) {
    if(cartoon == 'batman') this.clickedCartoon = '../../assets/dark-knight.jpg';
    else if (cartoon == 'spiderman') this.clickedCartoon = '../../assets/spiderman.jpg';
    else this.clickedCartoon = '../../assets/ironman.png';
    
  }
  constructor() { }

  

}
