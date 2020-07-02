import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserslistComponent } from '../users/userslist/userslist.component';
import { UserloginComponent } from '../users/userlogin/userlogin.component';

const routes: Routes = [
  {
    path: "userlist", component: UserslistComponent
  },

  {
    path: "home", component: UserloginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
