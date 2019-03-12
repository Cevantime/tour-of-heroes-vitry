import { Hero } from './types/hero.type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroes: Hero[] = [
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Wonderwoman'},
    {id: 3, name: 'Prettywoman'}
  ];
  idToGenerate: number = this.heroes.length + 1;
  getHeroes() {
    return this.heroes;
  }
  createHero(name: string) {
    return { id: this.idToGenerate++, name };
  }
}
