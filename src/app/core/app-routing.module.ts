
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { UserInterfaceComponent } from '../user-interface/user-interface.component';
import { LoginComponent } from '../login/login.component';
import { UserslistComponent } from '../users/userslist/userslist.component';
import { NewmembersComponent } from '../newmembers/newmembers.component';
import { HelpComponent } from '../help/help.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-interface', component: UserInterfaceComponent },
  { path: 'userlist', component: UserslistComponent },
  { path: 'newmembers', component: NewmembersComponent },
  { path: 'help', component: HelpComponent },
  { path: '', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }