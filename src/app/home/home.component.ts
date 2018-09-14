import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.services'
import { IMovie } from '../shared/movie.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  movieList: IMovie[]


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(
      (response: IMovie[]) => {
        this.movieList = response['results'].slice()
      }
    )

  }

}
