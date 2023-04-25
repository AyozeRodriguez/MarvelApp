import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'heroes-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {

  constructor( private heroesService: HeroesService) { }

  heroes?: Observable<any>;

  ngOnInit(): void {
    this.getAllHeroes();
  }

  getAllHeroes(){
    this.heroes = this.heroesService.getHeroes(0,5);
  }

}
