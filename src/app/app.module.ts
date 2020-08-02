
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from './material/material.module';


import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './core/app-routing.module';
import { NewmembersComponent } from './newmembers/newmembers.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileListComponent } from './file-list/file-list.component';

import { LoginComponent } from './login/login.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { HelpComponent } from './help/help.component';







@NgModule({
  declarations: [
    AppComponent,
    NewmembersComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    FileUploaderComponent,
    FileListComponent,
    LoginComponent,
    UserInterfaceComponent,
    HelpComponent,



  ],
  imports: [
    BrowserModule,
    UsersModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    /*LoginModule,
    UserInterfaceModule*/

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}