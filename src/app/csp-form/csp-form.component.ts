import { Component, OnInit } from '@angular/core';

export class Csp {
  constructor(
    public issue: string,
    public date?: string,
    public iptv?: string,
    public internet?: string,
    public voice?: string,
    public info?: string,
    public both?: string
  ){}
}

@Component({
  selector: 'csp-form',
  templateUrl: './csp-form.component.html',
  styleUrls: ['./csp-form.component.css']
})
export class CspFormComponent implements OnInit {

  title = "CSP Technical"

  model = new Csp("N/A")

  serviceIssues = [
    {value: 'Internet'},
    {value: 'IPTV'},
    {value: 'Voice'}
  ]

  reset() {
    this.model = new Csp("")
  }

  constructor() { }

  ngOnInit() {
  }

}
