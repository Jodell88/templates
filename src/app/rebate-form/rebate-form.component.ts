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

export class Calculator {
  constructor(
    public serPackage?: string,
    public serPackagePromotions?: string,
    public addons?: string,
    public addonsPromotions?: string,
    public stb?: number,
    public pvr?: number,
    public startDate?: Date,
    public endDate?: Date
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
    this.packages = this.packageService.packages;
    this.calcAddons = this.packageService.addons;
    this.calcPackages = this.packageService.packages;
  }

  title = "Rebate"

  cycles: any = [] ;

  model = new Rebate()

  modelCalculator = new Calculator();

  reset(){
    this.model = new Rebate()
    this.modelCalculator = new Calculator()
  }

  addons: any = [];
  packages: any = [];

  calcAddons: any = [];
  calcPackages: any = [];


  count = [0,1,2,3,4,5,6,7,8,9,10,11,12]

  days = (+this.modelCalculator.startDate - +this.modelCalculator.endDate)

  da = this.modelCalculator.startDate;
}