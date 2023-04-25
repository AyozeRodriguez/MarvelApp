import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    ListHeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
