import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(public thisDialogRef: MdDialogRef<ContactListComponent>) { }

  ngOnInit() {
  }

  contactCentreLeaders = [
    {employeeName: 'Romona Boisselle-Romano', position: 'Manager', extension: '2400'},
    {employeeName: 'Phyllis Charles-Downes', position: 'Team Lead', extension: '2401'},
    {employeeName: 'Kimlyn Vance', position: 'Team Lead', extension: '2402'},
    {employeeName: 'Jeremy Chapman', position: 'Team Lead', extension: '2418'}
  ]

  seniorTSP = [
    {employeeName: 'Jerome McClean', position: 'Senior Technical Support Professional', extension: '2409'},
    {employeeName: 'Nicholas Conliffe', position: 'Senior Technical Support Professional', extension: '2426'}
  ]

  tsp= [
    {employeeName: 'Andrew Lewis', position: 'Technical Support Professional', extension: '2464'},
    {employeeName: 'Christopher Seetahal', position: 'Technical Support Professional', extension: '2464'},
    {employeeName: 'Jevon Duncan', position: 'Technical Support Professional', extension: '2462'},
    {employeeName: 'Levi Hinds', position: 'Technical Support Professional', extension: '2405'},
    {employeeName: 'Nafeeza Ali', position: 'Technical Support Professional', extension: '2463'},
    {employeeName: 'Nicholas De Souza', position: 'Technical Support Professional', extension: '2466'},
    {employeeName: 'Nivash Roopchansingh', position: 'Technical Support Professional', extension: '2411'},    
    {employeeName: 'Peter Hosein', position: 'Technical Support Professional', extension: '2423'},
    {employeeName: 'Yinka-Marie Jones', position: 'Technical Support Professional', extension: '2430'}
  ]
    
  csp=[
    {employeeName: 'Cassie Browne', position: 'Customer Support Professional', extension: '2422'},
    {employeeName: 'Isaiah Farrell', position: 'Customer Support Professional', extension: '2422'},
    {employeeName: 'Tiffany Lewis', position: 'Customer Support Professional', extension: '2433'},
  ]

  dispatch = [
    {employeeName: 'Allyster Duntin', position: 'Dispatcher', extension: '2417'},
    {employeeName: 'Don-Leon Powder', position: 'Dispatcher', extension: '2434'},
    {employeeName: 'Keron Ragbirsingh', position: 'Dispatcher', extension: '2413'},
    {employeeName: 'Kerry Phillips', position: 'Dispatcher', extension: '2435'},
    {employeeName: 'Krystian Perry', position: 'Dispatcher', extension: '2414'},
    {employeeName: 'Marvin Baptiste', position: 'Dispatcher', extension: ''},
  ]

  noc = [
    {employeeName: 'NOC Technician 1', position: 'NOC Technician', extension: '2530'},
    {employeeName: 'NOC Technician 2', position: 'NOC Technician', extension: '2531'},
  ]

  salesResidential = [
    {employeeName: 'Delise Redmond', position: 'Telesales Agent', extension: '2106'},
    {employeeName: 'Fabian Nancoo', position: 'Telesales Agent', extension: '2111'},
    {employeeName: 'Kitwana Williams', position: 'Telesales Agent', extension: '2100'},
    {employeeName: 'Nyland Young', position: 'Telesales Agent', extension: '2432'},
    
  ]

  salesExecutive = [
    {employeeName: 'Anesa Paladee', position: 'Executive Sales', extension: '2602'},
    {employeeName: 'Natasha Williams-Hinkson', position: 'Executive Sales', extension: '2601'},
  ]

  finance = [
    {employeeName: 'Shelly-Ann Narine', position: 'Billing Assurance Officer', extension: '2703'},
    {employeeName: 'Robert Farrier', position: 'Manager, Credit & Collections', extension: '2703'},
    {employeeName: 'Vrindra Moonasar', position: 'Credit Assistant', extension: '2703'},
  ]

  it = [
    {employeeName: 'Jessel Ackbarali', position: 'Manager', extension: '2300'},
    {employeeName: 'Lackeshwar Bachan', position: 'Applications Consultant', extension: '2301'},
    {employeeName: 'Sean St. John', position: 'IT Specialist', extension: '2302'},
    {employeeName: 'Gerard Valere', position: 'IT Specialist', extension: '2303'},
  ]

  misc = [    
    {employeeName: 'Nekita Skair', position: 'Human Resource Assistant', extension: '2801'},
    {employeeName: 'Mickal Pierre', position: 'Marketing Assistant', extension: '2197'},
    {employeeName: 'Quanah Patino', position: 'Product Lead', extension: '2105'},    
    {employeeName: 'Vanessa Mohammed', position: 'Director of First Impression', extension: '3004'},
  ]

  hr = [
    {employeeName: 'Kandia Brown', position: 'Senior HR Officer/Human Resource Manager', extension: '2800'},
    {employeeName: 'Nekita Skair', position: 'Human Resource Assistant', extension: '2801'},

  ]

}
