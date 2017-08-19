import { Component, OnInit } from '@angular/core';

export class Billing{
  constructor(
    public balance?: string,
    public due?: string,
    public cycle?: string,
    public account?: string,
    public verified?: string,
    public comments?: string
  ){}
}

@Component({
  selector: 'billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {

  title = "Account Number/Balance Query"

  model = new Billing()

  reset() {
    this.model = new Billing()
  }

  cycles = [
    {value: "2nd to 1st"},
    {value: "16th to 15th"}
  ]

  options = [
    {value: "No"},
    {value: "Yes"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
