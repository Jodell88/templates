import { Component, OnInit } from '@angular/core';

export class Technical{
  constructor(
    public internet: string,
    public iptv: string,
    public serial: string,
    public profile?: string,
    public routes?: string,
    public date?: string,
    public description?: string,
    public steps?: string,
    public results?: string,
    public stb?: string,
    public alarms?: string,
    public attachments?: string,
    public port1?: string,
    public port2?: string,
    public port3?: string,
    public port4?: string,
    public ghz24?: string,
    public ghz5?: string
  ){}
}

@Component({
  selector: 'technical-form',
  templateUrl: './technical-form.component.html',
  styleUrls: ['./technical-form.component.css']
})
export class TechnicalFormComponent implements OnInit {

  constructor() { }

  title = "Technical"

  model = new Technical("", "", "")

  password = "f1r3b0x@3ng"

  reset() {
    this.model = new Technical("", "", "")
  }

  options = [
    {value: 'N/A'},
    {value: 'Yes'},
    {value: 'No'}
  ]

  profiles = [
    {value: 'NONE'},
    {value: 'TR069'},
    {value: 'INTERNET'}
  ]

  ngOnInit() {
  }

}
