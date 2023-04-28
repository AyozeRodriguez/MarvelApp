import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/characters.interface';

@Component({
  selector: 'heroes-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  heroes?: Hero[];
  singleHeroe?: Hero;
  spinnerOk: Boolean = false;

  ngOnInit(): void {
    this.getAllHeroes();
  }

  getAllHeroes() {
    this.heroesService.getHeroes(0, 30)
      .subscribe({
        next: res => this.heroes = res.data.results,
        error: err => console.error(err),
        complete: () => this.spinnerOk = true
      })
  }

  viewMoreHero(id: number) {
    this.heroesService.getHeroe(id)
      .subscribe({
        next: res => this.singleHeroe = res[0],
        error: err => console.error(err),
        complete: () => this.spinnerOk = true
      })
  }

  searchByHero(name: string) {
    if (name) {
      this.heroesService.getHeroeByName(name)
        .subscribe({
          next: res => this.heroes = res.data.results,
          error: err => console.error(err),
          complete: () => console.log('Observable completado')
        }
        );
    }
    else {
      this.getAllHeroes()
    }
  }

}
