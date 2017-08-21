import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bill-cycle',
  templateUrl: './bill-cycle.component.html',
  styleUrls: ['./bill-cycle.component.css']
})
export class BillCycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cycles = [
    {value: "2nd to 1st"},
    {value: "16th to 15th"}
  ]

}
