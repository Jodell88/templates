import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  crm(){
    window.open("http://mcl-vm2-crm/MassyCommunicationsLtd/main.aspx#849628433", "_blank")
  }

  dlo(){
    window.open("http://provisioning.massycommunications.com:8080/webclient/", "_blank")
  }

  fieldService(){
    window.open("https://fieldservice.massycommunications.com/dispatchFS/", "_blank")
  }

  garfield(){
    window.open("https://garfield.massycommunications.com/MCL_610/getPhoneNumber/1", "_blank")
  }

  tableau(){
    window.open("http://tableau.massycommunications.com/", "_blank")
  }

  mail(){
    window.open("http://tableau.massycommunications.com/", "_blank")
  }

  citrix(){
    window.open("https://citrix-access.tstt.co.tt/", "_blank")
  }
}
