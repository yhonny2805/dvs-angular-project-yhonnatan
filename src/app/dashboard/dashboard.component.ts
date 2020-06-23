import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  navigationStyle: {
    color: string,
    'background-color': string
  }

  colorStyle: string;
  constructor() { }

  ngOnInit(): void {

    this.navigationStyle = {
      'background-color': 'black',
      color: 'white',

    }
    this.colorStyle = 'white'
  }

}
