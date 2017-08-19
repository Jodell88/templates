import { Component, OnInit } from '@angular/core';

export class Forwarding {
  constructor(
    public ipaddress: string,
    public ports?: string,
    public connectedONT?: string,
    public dmz?: string,
    public staticIP?: string,
    public router?: string,
    public routerIP?: string
  ){}
}

@Component({
  selector: 'forwarding-form',
  templateUrl: './forwarding-form.component.html',
  styleUrls: ['./forwarding-form.component.css']
})
export class ForwardingFormComponent implements OnInit {

  title = "Port Forwarding"

  model = new Forwarding("", "");

  reset() {
    this.model = new Forwarding("", "");
  }

  constructor() { }

  ngOnInit() {
  }

}
