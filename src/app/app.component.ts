import { Component } from '@angular/core';

import { MovieService } from './movies.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]

})
export class AppComponent {
  title = 'eivom';
}
