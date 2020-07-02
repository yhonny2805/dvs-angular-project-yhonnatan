import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserslistComponent } from '../users/userslist/userslist.component';
import { UserloginComponent } from '../users/userlogin/userlogin.component';
import { UsersignupComponent } from '../users/usersignup/usersignup.component';

const routes: Routes = [
  {
    path: "userlist", component: UserslistComponent
  },

  {
    path: "home", component: UserloginComponent
  },
  {
    path: "usersignup", component: UsersignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
