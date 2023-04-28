import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListHeroesComponent } from "./pages/list-heroes/list-heroes.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { HeroDetailComponent } from "./pages/hero-detail/hero-detail.component";


const routes: Routes = [
  {
    path:'',
    component:ListHeroesComponent
  },
  {
    path: 'list-heroes',
    component: ListHeroesComponent
  },
  {
    path: 'heroe-detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
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
