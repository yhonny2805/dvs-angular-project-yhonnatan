import { NgModule, Injector } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UsersModule } from './users/users.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { SitenotfoundComponent } from './sitenotfound/sitenotfound.component';
import { NewmembersComponent } from './newmembers/newmembers.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileListComponent } from './file-list/file-list.component';
import { UserloginComponent } from './users/userlogin/userlogin.component';







@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SitenotfoundComponent,
    NewmembersComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    FileUploaderComponent,
    FileListComponent,
    LoginpageComponent,
    UserloginComponent


  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    UsersModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
