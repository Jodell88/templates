import { Injectable } from '@angular/core';

@Injectable()
export class BillingCycleService {

  constructor() { }

  cycles = [
    {value: "2nd to 1st"},
    {value: "16th to 15th"},
    {value: "25th to 24th"}
  ]

}
