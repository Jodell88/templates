import { Component, OnInit } from '@angular/core';

export class Payment {
  constructor(
    public invoice?: string,
    public date?: string,
    public amount?: string,
    public receipt?: string,
    public comments?: string
  ){}
}

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  title = "Missing Payment"

  model = new Payment("")

  reset() {
    this.model = new Payment("")
  }

  constructor() { }

  ngOnInit() {
  }

}
