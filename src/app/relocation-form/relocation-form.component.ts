import { Component, OnInit } from '@angular/core';

export class Relocation{
  constructor(
    public cycle?: string,
    public area?: string,
    public oldPackage?: string,
    public oldAddons?: string,
    public newPackage?: string,
    public newAddons?: string,
    public installDate?: string,
    public removalDate?: string,
    public bundle?: string,
    public rebate?: string,
    public calculation?: string,
    public amount?: string,
    public info?: string
  ){}
}

@Component({
  selector: 'app-relocation-form',
  templateUrl: './relocation-form.component.html',
  styleUrls: ['./relocation-form.component.css']
})
export class RelocationFormComponent implements OnInit {

  constructor() { }

  title = "Relocation"

  model = new Relocation()

  test = false

  options = [
    {value: "No"},
    {value: "Yes"}
  ]

  reset(){
    this.model = new Relocation()
  }

  cycles = [
    {value: "2nd to 1st"},
    {value: "16th to 15th"}
  ]

  addons = [
    {value: " N/A"},
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

  ngOnInit() {
  }

}