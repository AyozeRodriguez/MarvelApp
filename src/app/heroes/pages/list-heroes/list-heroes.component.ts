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
  offset: number = 0;
  limit: number = 28;

  distance = 2;
  throttle = 0;

  imageNotExistURL: string = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';


  ngOnInit(): void {
    this.getAllHeroes();
  }


  getAllHeroes() {
    this.heroesService.getHeroes(this.offset, this.limit)
      .subscribe({
        next: res => {
          if (this.heroes?.length) {
            this.heroes.push(...res.data.results)
          } else {
            this.heroes = res.data.results
          }
        },
        error: err => console.error(err),
        complete: () => {
          this.spinnerOk = true
          this.offset += this.limit;
        }
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
    console.log(name);
    if (name !=='') {
      this.heroesService.getHeroeByName(name)
        .subscribe({
          next: res => this.heroes = res.data.results,
          error: err => console.error(err)
        });
    }
    else {
      this.getAllHeroes()
    }
  }

  onScroll() {
    this.getAllHeroes();
  }

  imageExist(hero: Hero) {
    let url = `${ hero.thumbnail.path }.${ hero.thumbnail.extension }`;
    if (url === this.imageNotExistURL) return true
    else return false
  }


scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
