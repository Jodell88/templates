import { Component, OnInit } from '@angular/core';
import { BillingCycleService} from '../billing-cycle.service';
import { PackageDataService } from '../package-data.service';

export class Security{
  constructor(
    public date?: string,
    public account?: string,
    public name?: string,
    public address?: string,
    public id?: string,
    public contactname?: string,
    public primaryContact?: string,
    public secondaryContact?: string,
    public product?: string,
    public installDetails?: string,
    public coordinates?: string,
    public cycle?: string
  ){}
}


@Component({
  selector: 'security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(private packageService:PackageDataService, private billing:BillingCycleService) { }

  title = "Security"

  model = new Security()

  reset() {
    this.model = new Security()
  }

  cycles: any = [] ;
  products: any = [];

  ngOnInit() {
    this.products = this.packageService.SECURE;
    this.cycles = this.billing.cycles;
  }

}
