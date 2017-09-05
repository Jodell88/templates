import { Component, OnInit } from '@angular/core';
import { BillingCycleService} from '../billing-cycle.service';
import { PackageDataService } from '../package-data.service';

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

  constructor(private cycleService:BillingCycleService, private packageService:PackageDataService) { }

  ngOnInit() {
    this.cycles = this.cycleService.cycles;
    this.addons = this.packageService.addons;
  }

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

  cycles: any = [] ;

  addons: any = [];

  

}
