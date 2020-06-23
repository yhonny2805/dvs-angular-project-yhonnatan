import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  navigationStyle: {
    color: string,
    'background-color': string
  }

  colorStyle: string;
  personNames = ['JOHN', 'ANA', 'DAVID', 'REBECCA', 'ALISSON', 'HOLGER'];
  currentMembers: any[] = [
    {
      "name": 'JOHN',
      "age": 21
    },
    {
      "name": 'ANA',
      "age": 25
    },
    {
      "name": 'DAVID',
      "age": 32
    },
    {
      "name": 'REBECCA',
      "age": 43
    },
    {
      "name": 'ALISSON',
      "age": 27
    },
    {
      "name": 'HOLGER',
      "age": 28
    },
    {
      "name": 'ANA',
      "age": 31
    },
    {
      "name": 'PAUL',
      "age": 39
    },
    {
      "name": 'SAM',
      "age": 40
    },
    {
      "name": 'CHRIS',
      "age": 24
    },
    {
      "name": 'SABINA',
      "age": 30
    },
    {
      "name": 'MARK',
      "age": 38
    }
  ];


  constructor() { }

  ngOnInit(): void {
    this.navigationStyle = {
      'background-color': 'black',
      color: 'white',

    }
    this.colorStyle = 'white'
  }

}

