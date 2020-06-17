import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserforgotpasswordComponent } from './userforgotpassword/userforgotpassword.component';


@NgModule({
  declarations: [
    UserloginComponent,
    UserslistComponent,
    UsersignupComponent,
    UserforgotpasswordComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserloginComponent,
    UsersignupComponent,
  ]

})
export class UsersModule { }
