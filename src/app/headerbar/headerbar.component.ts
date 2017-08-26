import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('title') titleName: string; 

  feederMap(){
    window.open("https://www.google.com/maps/d/viewer?mid=1XII2dGmmObI_xvcXV2ARWTvPuaY", "_blank")
  }

}
