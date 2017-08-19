import { Component, OnInit } from '@angular/core';

export class Loyalty{
  constructor(
    public card: number,
    public description: string,
    public invoice?: number,
    public date?: string,
    public amountPaid?: string
  ){}
}

@Component({
  selector: 'loyalty-form',
  templateUrl: './loyalty-form.component.html',
  styleUrls: ['./loyalty-form.component.css']
})
export class LoyaltyFormComponent implements OnInit {

  title = "Massy Loyalty Points"

  model = new Loyalty(0, "")

  reset() {
    this.model = new Loyalty(0, "")
  }
  constructor() { }

  ngOnInit() {
  }

}
