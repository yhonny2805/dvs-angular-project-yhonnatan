import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersignupRoutingModule } from './usersignup-routing.module';
import { UsersignupComponent } from './usersignup.component';


@NgModule({
  declarations: [UsersignupComponent],
  imports: [
    CommonModule,
    UsersignupRoutingModule,
  ]
})
export class UsersignupModule { }
