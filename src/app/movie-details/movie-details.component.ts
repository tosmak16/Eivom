import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../movies.services'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: {}


  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    const movieId = this.route.snapshot.params['id']
    this.movieService.getMovieDetails(movieId).subscribe(
      (response) => {
        this.movie = response
      },
      (error) => console.log(error)
    )

  }

}
