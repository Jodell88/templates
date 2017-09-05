import { Injectable } from '@angular/core';

@Injectable()
export class PackageDataService {

  constructor() { }

  addons = [
    {name: "N/A"},
    {name: " Catch Up TV: Watch More", value: 30.00},
    {name: " Catch Up TV: Free", value: 0.00},
    {name: " FOX Premium", value: 75.00},
    {name: " HBO", value: 75.00},
    {name: " HBO & MAX Combo", value: 90.00},
    {name: " MAX", value: 45.00},
    {name: " MaxPak", value: 30.00},
    {name: " Premium Sports", value: 60.00},
    {name: " Watch Adult", value: 120.00},
  ]

}
