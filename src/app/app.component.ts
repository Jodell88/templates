import { Component } from '@angular/core';

export class Template {
  name: string;
  url: string;
}

const TEMPLATES: Template[] = [
  {name: 'Account Number/Balance Query', url: '/billing'},
  {name: 'Add-on Package Request', url: '/addon'},
  {name: 'CSP Technical', url: '/csp'},
  {name: 'High Speed', url: '/highspeed'},
  {name: 'Loyalty Points', url: '/loyalty'},
  {name: 'Missing Payment', url: '/payment'},
  {name: 'Port Forwarding', url: '/portforwarding'},
  {name: 'Rebate Request', url: '/rebate'},
  {name: 'Relocation', url: '/relocation'},
  {name: 'Retention', url: '/retention'},
  {name: 'Technical', url: '/technical'},
  {name: 'Upgrade/Downgrade', url: '/upgradedowngrade'},
  {name: 'Voice Features', url: '/voicefeatures'},
  {name: 'Work Order', url: '/workorder'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Case Templates';

  templates = TEMPLATES;
}
