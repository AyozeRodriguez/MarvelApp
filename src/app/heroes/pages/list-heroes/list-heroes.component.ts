import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../../interfaces/character.interface';
import { CharactersResponse } from '../../interfaces/characters.interface';

@Component({
  selector: 'heroes-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {

  constructor( private heroesService: HeroesService) { }

  heroes?: Observable<any>;
  singleHeroe?: any ;

  ngOnInit(): void {
    this.getAllHeroes();
  }

  getAllHeroes(){
    this.heroes = this.heroesService.getHeroes(0,30)
  }

  viewMoreHero(id: number){
    this.heroesService.getHeroe(id)
    .subscribe( res =>{
      this.singleHeroe = res[0]
      console.log(this.singleHeroe);
    })
  }

  searchByHero(name: string){
    if(name){
      this.heroes = this.heroesService.getHeroeByName(name);
    }
    else {
      this.getAllHeroes()
    }
  }


}
