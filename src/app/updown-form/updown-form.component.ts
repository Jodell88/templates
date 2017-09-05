import { Component, OnInit } from '@angular/core';
import { PackageDataService } from '../package-data.service';

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

  constructor(private packageService:PackageDataService) { }

  ngOnInit() {
    this.addons = this.packageService.addons;
  }

  title = "Upgrade / Downgrade"

  model = new Durq()

  reset(){
    this.model = new Durq()
  }

  addons: any= [];

  count = [0,1,2,3,4,5,6,7,8,9,10,11,12];

  options = [
    {value: "No"},
    {value: "Yes"}
  ];

}
