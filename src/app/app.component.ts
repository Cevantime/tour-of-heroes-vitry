import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = [
    'Superman',
    'Wonderwoman',
    'Prettywoman'
  ];
  name = '';
  heroToAdd = '';

  addHero() {
    // si heroToAdd = '    Coucou  '
    // alors heroToAdd.trim() = 'Coucou'
    // donc si heroToAdd = '          '
    // alors heroToAdd.trim() = ''
    if(this.heroToAdd.trim().length > 0) {
      this.heroes.push(this.heroToAdd.trim());
      this.heroToAdd = '';
    } else {
      alert('Le nom du héros ne doit pas être vide');
    }
  }
}
