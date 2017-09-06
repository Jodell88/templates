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
    {name: "Watch, Surf and Save It All", value: 1275.00, type: "Bundle", available: true},

    {name: "Surf Some More, Watch More", value: 500.00},
    {name: "Surf Some More, Watch More with PVR 9000", value: 520.00},
    {name: "Surf Some More, Watch A Lot", value: 600.00},
    {name: "Surf Some More, Watch A Lot More", value: 700.00},
    {name: "Surf Some More, Watch It All", value: 850.00},

    {name: "Surf A Lot, Watch More", value: 665.00},
    {name: "Surf A Lot, Watch More with PVR 9000", value: 685.00},
    {name: "Surf A Lot, Watch A Lot", value: 765.00},
    {name: "Surf A Lot, Watch A Lot More", value: 865.00},
    {name: "Surf A Lot, Watch it All", value: 1015.00},

    {name: "Surf A Lot More, Watch More", value: 800.00},
    {name: "Surf A Lot More, Watch More with PVR 9000", value: 820.00},
    {name: "Surf A Lot More, Watch A Lot", value: 900.00},
    {name: "Surf A Lot More, Watch A Lot More", value: 1000.00},
    {name: "Surf A Lot More, Watch it All", value: 1150.00},

    {name: "Surf It All, Watch More", value: 925.00},
    {name: "Surf It All, Watch More with PVR 9000", value: 945.00},
    {name: "Surf It All, Watch A Lot", value: 1025.00},
    {name: "Surf It All, Watch A Lot More", value: 1125.00},
    {name: "Surf It All, Watch It All", value: 1275.00}

  ]

}
