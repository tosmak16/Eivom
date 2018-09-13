import { Component, Output } from '@angular/core';

import { MovieService } from './movies.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]

})
export class AppComponent {
  title = 'eivom';
  movieList = []


  constructor(private movieService: MovieService) { }


  ngOnInit() {


  }

  onEnter(value: string) {
    this.movieService.searchMovie(value).subscribe(
      (response) => {
        this.movieList = response['results'].slice()
      },
      (error) => console.log(error)
    )
  }
}
