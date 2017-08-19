import { Component, OnInit } from '@angular/core';

export class Work{
  constructor(
    public summary: string,
    public history?: string,
    public results?: string,
    public recommendations?: string
  ){}
}

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "Work Order"

  model = new Work("")

  reset(){
    this.model = new Work("")
  }

}
