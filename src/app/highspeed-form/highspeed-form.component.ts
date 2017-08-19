import { Component, OnInit } from '@angular/core';

export class Highspeed{
  constructor(
    public cusname?:string,
    public info?: string
  ){}
}

export class User{
  constructor(
    public title?: string,
    public firstname?: string,
    public lastname?: string
  ){}
}

@Component({
  selector: 'highspeed-form',
  templateUrl: './highspeed-form.component.html',
  styleUrls: ['./highspeed-form.component.css']
})
export class HighspeedFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "High Speed"

  model = new Highspeed()
  user = new User()


  reset() {
    this.model = new Highspeed()
  }

  titles = [
    {value: "Mr."},
    {value: "Ms."},
    {value: "Mrs."}
  ]

}
