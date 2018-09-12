import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.services'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovieList = []
  latestMovieList = []
  topRatedMovieList = []



  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(
      (response) => {
        this.popularMovieList = response['results'].slice()
      },
      (error) => console.log(error)
    )

    this.movieService.getLatestMovies().subscribe(
      (response) => {
        this.latestMovieList = response['results'].slice()
      },
      (error) => console.log(error)
    )


    this.movieService.getTopRatedMovies().subscribe(
      (response) => {
        this.topRatedMovieList = response['results'].slice()
      },
      (error) => console.log(error)
    )
  }
}
