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


  getMovieDetails(movieId) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8045f8d7209227b589455e98ecf0616b`);
  }


  searchMovie(searchText) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=8045f8d7209227b589455e98ecf0616b&language=en-US&query=${searchText}`);
  }
}
