import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../movies.services'
import { IMovie } from '../shared/movie.model'



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovie


  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    const movieId = this.route.snapshot.params['id']
    this.movieService.getMovieDetails(movieId).subscribe(
      (response: IMovie) => {
        this.movie = response
      }
    )

  }

}
