import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListHeroesComponent } from "./pages/list-heroes/list-heroes.component";


const routes: Routes = [
  // {
  //   path:'',
  //   component:ListHeroesComponent
  // },
  {
    path: 'list-heroes',
    component: ListHeroesComponent
  },
  {
    path: '**',
    redirectTo: 'list-heroes'
  }
]


@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ],
})

export class HeroesRoutingModule {}
