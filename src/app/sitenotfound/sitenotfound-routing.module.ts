import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitenotfoundComponent } from './sitenotfound.component';


const routes: Routes = [

  {
    path: "**",
    component: SitenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitenotfoundRoutingModule { }
