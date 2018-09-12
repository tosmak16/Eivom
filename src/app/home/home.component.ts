import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  movieList = []


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(
      (response) => {
        this.movieList = response['results'].slice()
      },
      (error) => console.log(error)
    )

  }

}
