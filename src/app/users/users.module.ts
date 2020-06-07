import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserforgotpasswordComponent } from './userforgotpassword/userforgotpassword.component';



@NgModule({
  declarations: [UserloginComponent, UserslistComponent, UsersignupComponent, UserforgotpasswordComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserloginComponent
  ]

})
export class UsersModule { }
