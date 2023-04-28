import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/characters.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hero-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  singleHeroe: Hero | undefined;
  spinnerLoading: Boolean = true;


  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.viewMoreHero(id)
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
   * Función que envia al top de la pagina
   * @returns {any}
   */
  scrollTop() {
    document.body.scrollTop = -100;
    document.documentElement.scrollTop = -100;
  }

}
