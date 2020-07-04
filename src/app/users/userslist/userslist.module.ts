import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserslistRoutingModule } from './userslist-routing.module';
import { UserslistComponent } from './userslist.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [UserslistComponent],
  imports: [
    CommonModule,
    UserslistRoutingModule,
  ]
})
export class UserslistModule { }
