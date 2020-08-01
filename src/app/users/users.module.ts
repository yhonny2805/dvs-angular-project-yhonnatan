import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { UserforgotpasswordComponent } from './userforgotpassword/userforgotpassword.component';
import { UsersignupRoutingModule } from './usersignup/usersignup-routing.module';
import { UserslistRoutingModule } from './userslist/userslist-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UserslistComponent } from './userslist/userslist.component';



@NgModule({
  declarations: [
    UserforgotpasswordComponent,
    UserslistComponent


  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    /*LoginRoutingModule,
    UserInterfaceRoutingModule,*/
    /*UserslistRoutingModule,
    UsersignupRoutingModule,*/
    HttpClientModule,


  ],
  exports: []

})
export class UsersModule { }
