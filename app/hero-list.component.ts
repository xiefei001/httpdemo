import {Component, OnInit} from "@angular/core";
import {HeroService, Hero} from "./hero.service";
@Component({
  selector: 'hero-list',
  templateUrl: 'app/hero-list.component.html'
})
export class HeroListComponent implements OnInit {

  private heroes: Hero[];
  private errorMessage: string;
  private mode: string = 'Observable';

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes, err =>this.errorMessage = err);
  }

  addHero(name:string) {
    this.heroService.addHero(name).subscribe(hero => this.heroes.push(hero), err => this.errorMessage = err);
  }

}
