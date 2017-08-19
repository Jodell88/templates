import { Component } from '@angular/core';

export class Cycle {
  billCycle: string;
}

const CYCLES: Cycle[] = [
  {billCycle: 'N/A'},
  {billCycle: '2nd to 1st'},
  {billCycle: '16th to 15th'}
];

@Component({
  selector: 'bill-cycle',
  template: `
  <md-select placeholder="Billing Cycle" id="bill-cycle" style="width: 100%">
    <md-option *ngFor="let cycle of cycles" [value]="cycle.billCycle">{{ cycle.billCycle }}</md-option>
  </md-select>`
})

export class BillCycleComponent {
  cycles = CYCLES;
}
