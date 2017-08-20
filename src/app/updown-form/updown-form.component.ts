import { Component, OnInit } from '@angular/core';

export class Durq{
  constructor(
    public stb?: string,
    public pvr?: string,
    public addons?: string,
    public oldBundle?: string,
    public newBundle?: string,
    public onsite?: string,
    public info?: string,
    public order?: string
  ){}
}

@Component({
  selector: 'updown-form',
  templateUrl: './updown-form.component.html',
  styleUrls: ['./updown-form.component.css']
})
export class UpdownFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "Upgrade / Downgrade"

  model = new Durq()

  reset(){
    this.model = new Durq()
  }

  addons = [
    {value: " N/A"},
    {value: " Catch Up TV: Free"},
    {value: " Catch Up TV: Watch More"},
    {value: " FOX Premium"},
    {value: " HBO"},
    {value: " HBO & MAX Combo"},
    {value: " MAX"},
    {value: " MaxPak"},
    {value: " Premium Sports"},
    {value: " Watch Adult"},
  ];

  count = [0,1,2,3,4,5,6,7,8,9,10,11,12];

  options = [
    {value: "No"},
    {value: "Yes"}
  ];

}
