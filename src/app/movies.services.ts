import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {

  }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=8045f8d7209227b589455e98ecf0616b');
  }

}
