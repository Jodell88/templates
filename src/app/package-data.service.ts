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

  packages = [
    {name: "Surf A Little", value: 175.00, type: "Internet", bundle: false, available: false},
    {name: "Surf Some more", value: 200.00, type: "Internet", bundle: true, available: true, discount: 50.00},
    {name: "Surf More", value: 250.00, type: "Internet", bundle: false, available: false},
    {name: "Surf A Lot", value: 390.00, type: "Internet", bundle: true, available: true, discount: 75.00},
    {name: "Surf A Lot More", value: 550.00, type: "Internet", bundle: true, available: true, discount: 100.00},
    {name: "Surf It All", value: 700.00, type: "Internet", bundle: true, available: true, discount: 125.00},

    {name: "Watch More", value: 350.00, type: "IPTV", bundle: true, available: true},
    {name: "Watch A Lot", value: 450.00, type: "IPTV", bundle: true, available: true},
    {name: "Watch A Lot More", value: 550.00, type: "IPTV", bundle: true, available: true},
    {name: "Watch It All", value: 700.00, type: "IPTV", bundle: true, available: true},

    {name: "Watch, Surf and Save Just a Little", value: 250.00, type: "Bundle", available: false},
    {name: "Watch, Surf and Save a Little More", value: 500.00, type: "Bundle", available: true},
    {name: "Watch, Surf and Save a Little More with PVR 9000", value: 520.00, type: "Bundle", available: true},
    {name: "Watch, Surf and Save a Lot", value: 765.00, type: "Bundle", available: true},
    {name: "Watch, Surf and Save a Lot More", value: 1000.00, type: "Bundle", available: true},
    {name: "Watch, Surf and Save It All", value: 1275.00, type: "Bundle", available: true}

  ]

}
