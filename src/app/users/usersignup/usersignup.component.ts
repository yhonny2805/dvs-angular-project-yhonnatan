import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {
  Headline = 'Sign up';
  termsOfService = 'By clicking <em>Sign up</em> you agree to our '
  newMember: string = '';
  srcURL = "assets/dvs4.PNG"
  mySubmit(): void {
    alert('Thank you for signing up with us. Your request is being processed!');
  }
}
