import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  headline = 'Welcome to Document Verification System!';
  constructor(private router: Router) { }
  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["userlogin"]);
    } else {
      alert("Invalid credentials");
    }
  }
}


