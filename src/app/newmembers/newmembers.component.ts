import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Newcustomer } from 'src/app/modules/newcustomer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newmembers',
  templateUrl: './newmembers.component.html',
  styleUrls: ['./newmembers.component.css']
})
export class NewmembersComponent implements OnInit {

  roles: Object = [
    { id: 0, role: 'SuperUser' },
    { id: 1, role: 'Admin' },
    { id: 2, role: 'Reader' },
  ];


  newuser = new Newcustomer(10, '', '', '', null, '', '', false);



  submitted = false;

  onSubmit(userForm: NgForm) {
    console.log('form', userForm);
    console.log('form controls', userForm.controls);
    console.log('form value', userForm.value);
    console.log('newuser', this.newuser);

    if (userForm.form.valid) {
      this.submitted = true;
    } else {
      console.log('Invalid Form.');
    }
  }


  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(): void {
    this.router.navigate(["login"]);
  }
}