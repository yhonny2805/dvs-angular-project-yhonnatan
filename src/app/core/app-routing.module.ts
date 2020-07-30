
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInterfaceComponent } from '../user-interface/user-interface.component';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-interface', component: UserInterfaceComponent },
  { path: '', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }



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