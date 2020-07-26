import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

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
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileListComponent } from './file-list/file-list.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SitenotfoundComponent,
    NewmembersComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    FileUploaderComponent,
    FileListComponent

  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    UsersModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  /*bootstrap*/entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {

    const el = createCustomElement(AppComponent, { injector });
    customElements.define('componentes-elemento', el);

  }


}
