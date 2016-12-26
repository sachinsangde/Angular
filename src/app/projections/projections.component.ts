import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projections',
  templateUrl: './projections.component.html',
  styleUrls: ['./projections.component.css']
})
export class ProjectionsComponent implements OnInit {
 private myData : String;
  public constructor() {
    this.myData = 'Hello CodeKul'; //String Interpolation
   }

  ngOnInit() {
  }

}
