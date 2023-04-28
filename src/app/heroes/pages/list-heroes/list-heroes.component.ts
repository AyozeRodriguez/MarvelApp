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

  heroes: Hero[] | undefined ;
  singleHeroe: Hero | undefined;
  spinnerLoading: Boolean = true;
  offset: number = 0;
  limit: number = 28;

  distanceScroll = 2;
  throttleScroll = 0;

  imageNotExistURL: string = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';


  ngOnInit(): void {
    this.getAllHeroes();
  }


  /**
   * Devuelve un array de Heroes, se le pasa al servicio un limite y un offset que varia según el scroll
   * @returns {Hero[]}
   */
  getAllHeroes() {
    this.heroesService.getHeroes(this.offset, this.limit)
      .subscribe({
        next: res => {
          if (this.heroes?.length) {
            this.heroes.push(...res.data.results)
          } else {
            this.heroes = []
            this.heroes = res.data.results
          }
        },
        error: err => console.error(err),
        complete: () => {
          this.spinnerLoading = false
          this.offset += this.limit;
        }
      })
  }

  /**
   * Se le envia una id de un Heroe y se recibe un heroe con todos sus datos
   * @param {id:number}
   * @returns {Hero}
   */
  viewMoreHero(id: number) {
    this.heroesService.getHeroe(id)
      .subscribe({
        next: res => {
          this.singleHeroe = res[0]
        },
        error: err => console.error(err),
        complete: () => this.spinnerLoading = false
      })
  }

  /**
   * Devuelve un Array de Heroes si existe algún nombre que contenga el string que se le envia
   * @param {name:string}
   * @returns {Hero[]}
   */
  searchByHero(name: string) {
    if (name) {
      this.heroesService.getHeroeByName(name)
        .subscribe({
          next: res => this.heroes = res.data.results,
          error: err => console.error(err),
          complete: () => this.scrollTop()
        });
    }
    else {
      this.offset = 0;
      this.heroes = [];
      this.getAllHeroes()
    }
  }

  /**
   * Hace una petición para traer mas heroes al hacer scroll
   * @returns {any}
   */
  onScroll() {
    this.getAllHeroes();
  }

  /**
   * Se usa para comprobar si un heroe tiene imagen, se controla que no corte el texto de las imagenes
   * @param {hero:Hero}
   * @returns {any}
   */
  imageExist(hero: Hero) {
    let url = `${ hero.thumbnail.path }.${ hero.thumbnail.extension }`;
    if (url === this.imageNotExistURL) return true
    else return false
  }


  /**
   * Función que envia al top de la pagina
   * @returns {any}
   */
  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
