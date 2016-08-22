import {Component} from '@angular/core';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
import {HeroService} from "./hero.service";

@Component({
  selector: 'my-app',
  template: '<hero-list></hero-list>',
  providers: [HeroService]
})
export class AppComponent {
}
