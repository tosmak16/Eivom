import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {

  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=8045f8d7209227b589455e98ecf0616b');
  }

  getLatestMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8045f8d7209227b589455e98ecf0616b');
  }

  getTopRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8045f8d7209227b589455e98ecf0616b');
  }
}
