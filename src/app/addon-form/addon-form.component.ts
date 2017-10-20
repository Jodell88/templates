import { Component, OnInit } from '@angular/core';
import { PackageDataService } from '../package-data.service';

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

  constructor(private packageService:PackageDataService) { }

  ngOnInit() {
    this.addons = this.packageService.addons;
    this.packages = this.packageService.packages;
  }

  model = new Addons()

  reset(){
    this.model = new Addons
  }

  title = "Add-on Package Request"

  addons: any= [];
  packages: any= [];

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
