
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  username: string;
  password: string;
  showSpinner: any;


  ngOnInit() {
  }
  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["user-interface"]);
    } else {
      alert("Invalid credentials");
    }
  }

  signUp(): void {
    this.router.navigate(["newmembers"]);
  }
}