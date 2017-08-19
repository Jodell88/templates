import { Component, OnInit } from '@angular/core';

export class Rebate{
  constructor(
    public cycle?: string,
    public invoice?: string,
    public amount?: number,
    public servicePackage?: string,
    public addons?: string,
    public stb?: number,
    public pvr?: number,
    public description?: string,
    public rebate?: string
  ){}
}


@Component({
  selector: 'rebate-form',
  templateUrl: './rebate-form.component.html',
  styleUrls: ['./rebate-form.component.css']
})
export class RebateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "Rebate"

  model = new Rebate()

  reset(){
    this.model = new Rebate()
  }

  cycles = [
    {value: "2nd to 1st"},
    {value: "16th to 15th"}
  ]

  addons = [
    {value: " N/A"},
    {value: " Catch Up TV: Watch More"},
    {value: " FOX Premium"},
    {value: " HBO"},
    {value: " HBO & MAX Combo"},
    {value: " MAX"},
    {value: " MaxPak"},
    {value: " Premium Sports"},
    {value: " Watch Adult"},
  ]

  count = [0,1,2,3,4,5,6,7,8,9,10,11,12]

}
