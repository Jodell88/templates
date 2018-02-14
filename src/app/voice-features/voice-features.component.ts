import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PackageDataService } from '../package-data.service';

export class Features{
  constructor(
    public featureAdded?: string,
    public cost?: string,
    public crm?: string,
    public featureRemoved?: string,
    public verified?: string,
    public serviceNumber?: string
  ){}
}

@Component({
  selector: 'app-voice-features',
  templateUrl: './voice-features.component.html',
  styleUrls: ['./voice-features.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VoiceFeaturesComponent implements OnInit {

  constructor(private packageService:PackageDataService) { }

  ngOnInit() {
    this.features = this.packageService.CALL_MASTER;
  }

  title = "Voice Features"

  model = new Features()

  reset(){
    this.model = new Features()
  }

  features: any = [];

  options = [
    {value: "No"},
    {value: "Yes"}
  ];

}
