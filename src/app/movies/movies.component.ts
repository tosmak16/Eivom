import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.services'

import { IMovie } from '../shared/movie.model'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovieList: IMovie[]
  latestMovieList: IMovie[]
  topRatedMovieList: IMovie[]



  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(
      (response: IMovie) => {
        this.popularMovieList = response['results'].slice()
      }
    )

    this.movieService.getLatestMovies().subscribe(
      (response: IMovie) => {
        this.latestMovieList = response['results'].slice()
      })


    this.movieService.getTopRatedMovies().subscribe(
      (response: IMovie) => {
        this.topRatedMovieList = response['results'].slice()
      })
  }
}
