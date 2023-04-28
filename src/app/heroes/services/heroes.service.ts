import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CharactersResponse } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  URL_API = 'https://gateway.marvel.com:443/v1/public/';
  private publicKey: string = '8fe7e5ca4f1d30202fbdf477adda9ef6';
  private privateKey: string = 'a053463e329915926046783471001be0b300e7b0';
  private MD5_HASH: string ='25d09528ddc128367cd54d338ae135c9';


  constructor( private http: HttpClient) { }

  getHeroes(offset: number, limit: number): Observable<CharactersResponse> {
    const URL = `${this.URL_API}characters?apikey=${this.publicKey}&hash=${this.MD5_HASH}&ts=1&offset=${offset}&limit=${limit}`;
    return this.http.get<CharactersResponse>(URL)
  }

  getHeroe(id :number){
    const URL = `${this.URL_API}characters/${id}?apikey=${this.publicKey}&hash=${this.MD5_HASH}&ts=1`
    return this.http.get(URL)
    .pipe(map((data:any) => data.data.results))
  }

  getHeroeByName(name: string): Observable<CharactersResponse>{
    const URL = `${this.URL_API}characters?apikey=${this.publicKey}&hash=${this.MD5_HASH}&ts=1&nameStartsWith=${name}`;
    return this.http.get<CharactersResponse>(URL)
  }
}
