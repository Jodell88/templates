import { Component, OnInit } from '@angular/core';

export class Retention{
  constructor(
    public existingPackage: string,
    public promotion?: string,
    public balance?: string,
    public reason?: string,
    public save?: string,
    public saveCase?: string
  ){}
}

@Component({
  selector: 'retention-form',
  templateUrl: './retention-form.component.html',
  styleUrls: ['./retention-form.component.css']
})
export class RetentionFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "Retention"

  model = new Retention("")

  reset(){
    this.model = new Retention("")
  }

}
