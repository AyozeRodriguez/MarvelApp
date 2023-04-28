import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    ListHeroesComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class HeroesModule { }
