import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';



@NgModule({
  declarations: [
    ListHeroesComponent,
    PageNotFoundComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class HeroesModule { }
