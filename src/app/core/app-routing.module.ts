
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { UserInterfaceComponent } from '../user-interface/user-interface.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-interface', component: UserInterfaceComponent },
  { path: '', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

/*const routes: Routes = [

  {
    path: '',
    loadChildren: () => import(`../login/login.module`).then(m => m.LoginModule)
  },
  {
    path: "user-interface",
    loadChildren: () => import(`../user-interface/user-interface.module`).then(m => m.UserInterfaceModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/









/*import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserloginComponent } from '../users/userlogin/userlogin.component';
import { SitenotfoundComponent } from '../sitenotfound/sitenotfound.component';

const routes: Routes = [
  /* {
     path: "userslist", component: UserslistComponent
   },
   {
     path: "userlogin", component: UserloginComponent
   },
   {
     path: "usersignup", component: UsersignupComponent
   }
   */
/* {
   path: "userlogin",
   children: [
     {
       path: '',
       component: UserloginComponent
     },
     {
       path: "userslist",
       loadChildren: () => import(`../users/userslist/userslist.module`).then(m => m.UserslistModule)
     },
     {
       path: "usersignup",
       loadChildren: () => import(`../users/usersignup/usersignup.module`).then(m => m.UsersignupModule)
     },
     {
       path: "**",
       component: SitenotfoundComponent
     }
   ]
 },
]*/

/*@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/