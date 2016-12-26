import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intercomm',
  templateUrl: './intercomm.component.html',
  styleUrls: ['./intercomm.component.css']
})
export class IntercommComponent {

  private heroLink : String;

  constructor() { }

  public onHeroClickInParent(heroLink : String) {
    console.log(`Hero Link is ${heroLink}`);
    this.heroLink = heroLink;
  }


}
