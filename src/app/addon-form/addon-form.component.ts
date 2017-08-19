import { Component, OnInit } from '@angular/core';

export class Addons{
  constructor(
    public addon?: string,
    public promotion?: string,
    public basePackage?: string,
    public verified?: string
  ){}
}

@Component({
  selector: 'addon-form',
  templateUrl: './addon-form.component.html',
  styleUrls: ['./addon-form.component.css']
})
export class AddonFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new Addons()

  reset(){
    this.model = new Addons
  }

  title = "Add-on Package Request"

  addons = [
    {value: " Catch Up TV: Watch More"},
    {value: " Catch Up TV: Free"},
    {value: " FOX Premium"},
    {value: " HBO"},
    {value: " HBO & MAX Combo"},
    {value: " MAX"},
    {value: " MaxPak"},
    {value: " Premium Sports"},
    {value: " Watch Adult"},
  ]

  promotions = [
    {value: "N/A"},
    {value: " 50% off Fox Premium for 3 months"},
    {value: " 50% off HBO & MAX Combo for 3 months"}
  ]

  options = [
    {value: "No"},
    {value: "Yes"}
  ]

}
