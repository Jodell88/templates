import { Component, OnInit } from '@angular/core';
import { BillingCycleService} from '../billing-cycle.service';
import { PackageDataService } from '../package-data.service';

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

  constructor(private cycleService:BillingCycleService, private packageService:PackageDataService) { }

  ngOnInit() {
    this.cycles = this.cycleService.cycles;
    this.addons = this.packageService.addons;
  }

  title = "Rebate"

  cycles: any = [] ;

  model = new Rebate()

  reset(){
    this.model = new Rebate()
  }

  addons: any = [];

  count = [0,1,2,3,4,5,6,7,8,9,10,11,12]

}
