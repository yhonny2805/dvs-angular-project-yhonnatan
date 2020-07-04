import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { UserforgotpasswordComponent } from './userforgotpassword/userforgotpassword.component';
import { UsersignupRoutingModule } from './usersignup/usersignup-routing.module';
import { UserloginRoutingModule } from './userlogin/userlogin-routing.module';
import { UserslistRoutingModule } from './userslist/userslist-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserforgotpasswordComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    UserloginRoutingModule,
    UserslistRoutingModule,
    UsersignupRoutingModule,
    HttpClientModule,


  ],
  exports: []

})
export class UsersModule { }
