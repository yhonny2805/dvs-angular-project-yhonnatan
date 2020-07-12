import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { SitenotfoundComponent } from './sitenotfound/sitenotfound.component';
import { NewmembersComponent } from './newmembers/newmembers.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SitenotfoundComponent,
    NewmembersComponent,
    PasswordPatternDirective,
    MatchPasswordDirective

  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    UsersModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
