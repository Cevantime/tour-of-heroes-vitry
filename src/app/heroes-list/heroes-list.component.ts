import { Hero } from './../types/hero.type';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  heroToAdd = '';
  selectedHero: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  addHero() {
    // si heroToAdd = '    Coucou  '
    // alors heroToAdd.trim() = 'Coucou'
    // donc si heroToAdd = '          '
    // alors heroToAdd.trim() = ''
    if (this.heroToAdd.trim().length > 0) {
      this.heroes.push(this.heroesService.createHero(this.heroToAdd));
      this.heroToAdd = '';
    } else {
      alert('Le nom du héros ne doit pas être vide');
    }
  }
}
