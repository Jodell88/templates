import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PackageDataService } from '../package-data.service';

export class Features {
  constructor(
    public featureAdded?: string,
    public cost?: string,
    public crm?: string,
    public featureRemoved?: string,
    public verified?: string,
    public serviceNumber?: string
  ) {}
}

@Component({
  selector: 'app-voice-features',
  templateUrl: './voice-features.component.html',
  styleUrls: ['./voice-features.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VoiceFeaturesComponent implements OnInit {

  title = 'Voice Features';

  features: any = [];

  options = [
    {value: 'No'},
    {value: 'Yes'}
  ];

  model = new Features();

  reset(){
    this.model = new Features();
  }

  form(){
    window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=3MWU6NdhVEOBCcOS4Y4JQv4Oe3XapBxHj3uU7rqlpzxUMk5ENVpQWDczNENPRUQwVjdKNFFWRk5OQy4u', '_blank');
  }

  spreadsheet(){
    window.open('https://ampliatt-my.sharepoint.com/:x:/g/personal/nicholas_desouza_amplia_co_tt/ETM-PfR8R6hMqx0EsF7OmggBUsbeOj7olsS26XzEoFqp6Q?e=7YUDs2', '_blank');
  }

  constructor(private packageService:PackageDataService) { }

  ngOnInit() {
    this.features = this.packageService.CALL_MASTER;
  }

}
