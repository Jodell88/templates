import { Component, OnInit } from '@angular/core';

export class TechVoice{
  constructor(
    public software?: string,
    public xml?: string,
    public preconfig?: number,
    public pots?: string,
    public mac?: string,
    public dhcp?: number,
    public tel1?: number,
    public handset?: string,
    public registered?: string,
    public make?: string,
    public receive?: string,
    public dunned?: string,
    public uni?: string,
    public voip?: string,
  ){}
}

@Component({
  selector: 'technical-voice',
  templateUrl: './technical-voice.component.html',
  styleUrls: ['./technical-voice.component.css']
})
export class TechnicalVoiceComponent implements OnInit {

  title = "Voice Technical"
  model = new TechVoice
  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.model = new TechVoice()
  }
}
