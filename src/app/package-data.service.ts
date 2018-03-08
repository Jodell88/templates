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
    {name: "Surf It All Plus, Watch It All", value: 1275.00},

  ]

  VAT = 1.125;
  
  CALL_MASTER = [
    {name: "Caller ID", price: 14 * this.VAT, interval: "Month", description: "Allows a person to identify the number of the phone from which the call is being made"},
    {name: "Caller ID with Anonymous caller rejection", price: 14 * this.VAT, interval: "Month", description: "Allows a person to identify the number of the phone from which the call is being made"},
    {name: "Alert Call", price: 3 * this.VAT, interval: "Month", description: "Generates a call to a pre-designed number for help without dialing"},
    {name: "Automatic Redial", price: 14 * this.VAT, interval: "Month", description: "Automatically redials a number that is busy until the line is free"},
    {name: "Call Forward Don't Answer", price: 6 * this.VAT, interval: "Month", description: "Calls automatically transferred from your phone to a pre-designated number upon no answer"},
    {name: "Call forward Busy", price: 6 * this.VAT, interval: "Month", description: "Calls automatically transferred from your phone to a pre-designated number upon no answer"},
    {name: "Call trace", price: 5 * this.VAT, interval: "Activation", description: "Callers who activate Hold Number Delivery can have their number traced by for the persons receiving the call"},
    {name: "Call trace - noama", price: 5 * this.VAT, interval: "Activation", description: "Callers who activate Hold Number Delivery can have their number traced by for the persons receiving the call"},
    {name: "Hold call waiting", price: 3 * this.VAT, interval: "Month", description: "If a person has call waiting, this option allows to temporarily cancel \"call waiting\" feature on a \"per call\' basis"},
    {name: "My call 1st", price: 8 * this.VAT, interval: "Month", description: "Allows a person to tell who an incoming call is for by listening to its unique ring"},
    {name: "My call 2nd", price: 2 * this.VAT, interval: "Month", description: "Allows a person to tell who an incoming call is for by listening to its unique ring"},
    {name: "My call 3rd", price: 2 * this.VAT, interval: "Month", description: "Allows a person to tell who an incoming call is for by listening to its unique ring"},
    {name: "Return call", price: 14 * this.VAT, interval: "Month", description: "Allows a person to know who called when the telephone stops ringing before you have had time to answer"},
    {name: "Speed calling 30", price: 6 * this.VAT, interval: "Month", description: "A user can program up to 30 frequently used numbers into the telephone for quick calling"},
    {name: "Speed calling 8", price: 8 * this.VAT, interval: "Month", description: "A user can program up to 8 frequently used numbers into the telephone for quick calling"},
    {name: "Anonymous caller rejection", price: 14 * this.VAT, interval: "Month", description: "Automatically rejects anonymous calls"},
    {name: "Call forwarding", price: 6 * this.VAT, interval: "Month", description: "Manually sets calls to be forwarded to another number"},
    {name: "Call Waiting", price: 6 * this.VAT, interval: "Month", description: "Allows two incoming calls on one line"},
    {name: "Three way calling", price: 6 * this.VAT, interval: "Month", description: "Allows three parties together on three different phones for personal or business purposes"},
    {name: "Voice Mail Basic", price: 12 * this.VAT, interval: "Month", description: ""},
    {name: "Voice Mail Full Basic", price: 15 * this.VAT, interval: "Month", description: ""},
    {name: "Voice Mail Plus", price: 25 * this.VAT, interval: "Month", description: ""},
    {name: "Voice Security package with Caller ID", price: 19 * this.VAT, interval: "Month", description: "Package with 4 features of Caller ID, Call waiting, Hold number delivery and Alert call"},
    {name: "Voice Security package with Return call", price: 19 * this.VAT, interval: "Month", description: "Package with 4 features of Return call, Call waiting, Hold number delivery and Alert call"},
    {name: "Voice Personality package with Caller ID", price: 19 * this.VAT, interval: "Month", description: "Package with 4 features of Caller ID, Call waiting, 3 way calling and Speed calling (8)"},
    {name: "Voice Personality package with Return call", price: 19 * this.VAT, interval: "Month", description: "Package with 4 features of Return call, Call waiting, 3 way calling and Speed calling (8)"},
    {name: "Voice Conference package with Caller ID", price: 19 * this.VAT, interval: "Month", description: "Package with 4 features of Caller ID, Call waiting, 3 way calling and Call forwarding"},
    {name: "Voice Conference package with Return Call", price: 18 * this.VAT, interval: "Month", description: "Package with 4 features of Return call, Call waiting, 3 way calling and Call forwarding"},  
  ]

}
